import logging
from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, status, Body
from fastapi import Request
from fastapi.encoders import jsonable_encoder
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from datetime import datetime, timedelta
from typing import Annotated, Union
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from jose import JWTError, jwt
from passlib.context import CryptContext
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from app.model.user import User, UserInDB, Token, TokenData
from app.auth.auth_handler import signJWT
from app.exceptions.custom_exception import CustomException
from app.utils.random_code import getRandomCode
from app.db.db import AsyncIOMotorClient, get_db
from app.db.db import get_db
from app.model.user import User
from app.model.response import Response
from app.repository.users_repository import user_signin, add_user, verify_email
from app.repository.address_repository import find_address_by_email



# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

router = APIRouter(
    prefix="/users",
    tags=["Users"],
    responses={404: {"description": "Not found"}},
)

@router.get("/find_addresses/{email}")
async def findAddresses(email:str,client: AsyncIOMotorClient = Depends(get_db),response_model_exclude_none=True): # type: ignore
    response = await verify_email(email,client)
    res = await find_address_by_email(ObjectId(response['object_id']),client)
    #print(f"userObje {response['object_id']}")
    #print(response)
    return res

@router.post("/verify_account")
async def verify_account(email:str= Body(..., embed=True),client: AsyncIOMotorClient = Depends(get_db),response_model_exclude_none=True): # type: ignore
    response = await verify_email(email,client)
    if response is None:
        raise HTTPException(status_code=418, detail="Nope! I don't like 3.")
    return response


@router.post("/signin")
async def signin(email:str= Body(..., embed=True),password:str= Body(..., embed=True),client: AsyncIOMotorClient = Depends(get_db),response_model_exclude_none=True): # type: ignore
    response = await user_signin(email,password,client)
    return response

@router.post("/create_user",response_model=Response,response_model_exclude_none=True, status_code=status.HTTP_201_CREATED)
async def create_user(user:User,client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    response = await add_user(user,client)
    return response

@router.post("/token",response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    print(form_data.username)
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
   
    if not user:
        print("dddd")
        raise CustomException
        """
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        """
  
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
   
    item =  {"username": user.username,"access_token": access_token, "token_type": "bearer"}
    return JSONResponse(content=item,status_code=200)


@router.get("/me", response_model=User)
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return current_user



@router.get("/security_code")
async def security_code():
    message = MIMEMultipart()
    message["To"] = 'To line here.'
    message["From"] = 'From line here.'
    message["Subject"] = 'Subject line here.'

    title = '<b> Title line here. </b>'
    
    security_code = getRandomCode(5)
    bodyText = "Your security code is " + str(security_code)
    #messageText = MIMEText('''Message body goes here.''','html')
    messageText = MIMEText(bodyText,'html')
    message.attach(messageText)

    email = 'hrevit@gmail.com'
    password = 'yxtd nofl hotg xonz' #this app password from google
    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.ehlo('Gmail')
        server.starttls()
        server.login(email,password)
        fromaddr = 'hrevit@gmail.com'
        toaddrs  = 'hrevit@gmail.com'
        server.sendmail(fromaddr,toaddrs,message.as_string())
        server.quit()
    except SMTPResponseException as e:
        error_code = e.smtp_code
        error_message = e.smtp_error
    return str(security_code)