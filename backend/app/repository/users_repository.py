import logging
from fastapi import HTTPException
#from app.db.mongodb import AsyncIOMotorClient

from app.model.response import Response
from fastapi.encoders import jsonable_encoder
from motor.motor_asyncio import AsyncIOMotorClient
from app.utils.cryto import encrypt_password,decrypt_password,hashed_password

from app.model.user import User

logger = logging.getLogger("app-logger")

async def user_signin(email:str,password:str,client: AsyncIOMotorClient) -> dict: # type: ignore
    #pass1 = encrypt_password(password)
    #print(f"pass {password}")
    
    pass1 = hashed_password(password)
    print(f'encryp {pass1}')
    user = await client.mydb.users.find_one({"email": email,"password": pass1})
    
    if user is None:
        raise HTTPException(status_code=404, detail='User not found.')
    print(f"user {user['_id']}")
    #return Response(msg='User exists',id=user._id)
    return {'id': user['_id'],'user': 'User exists'}

async def verify_email(email:str,client: AsyncIOMotorClient) -> dict: # type: ignore
    
    user = await client.users.find_one({"email": email})
    if user is None:
        raise HTTPException(status_code=404, detail='User not found.') 
    #return User(**user)
    return {"object_id": user['_id']}

        
async def add_user(user:User,client: AsyncIOMotorClient) -> Response: # type: ignore
    #tek = encrypt_password(user.password)
    #pass1 = decrypt_password(tek)
    tek = hashed_password(user.password)
    user.__dict__.update({'password':tek})
    data = jsonable_encoder(user)

    try:
        result = await client.users.insert_one(data)
        objectId =result.inserted_id
        return Response(msg='New user added',id=str(objectId))
    except Exception as e:
        raise HTTPException(status_code=424, detail='Unable to create new an user')
    