import os

from typing import Optional, List
from fastapi import Depends,FastAPI, Body, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware

from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import ConfigDict, BaseModel, Field, EmailStr
from pydantic.functional_validators import BeforeValidator
from typing_extensions import Annotated
from bson import ObjectId
from pymongo import ReturnDocument
from motor.motor_asyncio import AsyncIOMotorClient
from app.model.item import Item
from app.routers.items import router as items_router
from app.routers.users import router as users_router
from app.routers.products import router as products_router

from app.db.mongodb_utils import connect_to_mongo, close_mongo_connection

from app.dependencies.header_token import get_query_token, get_token_header

from app.db.mongodb import AsyncIOMotorClient, get_database

from app.exceptions.custom_exception import CustomException
import uvicorn

#MONGO_URL = "mongodb://root:example@172.18.0.2:27017?uuidRepresentation=standard"
#MONGO_DB_NAME = "mydatabase"
#MONGO_CLIENT: AsyncIOMotorClient = None

app = FastAPI()
app.router.prefix = "/api"
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

app.include_router(items_router)
app.include_router(users_router)
app.include_router(products_router)
"""
MONGO_CLIENT = AsyncIOMotorClient(MONGO_URL)
db = MONGO_CLIENT[MONGO_DB_NAME]
# Send a ping to confirm a successful connection
try:
    MONGO_CLIENT.admin.command('ping')
    print("Pinged your deployment. You have successfully connected to MongoDB!")
except Exception as e:
    print(e)
"""

#@app.middleware(CustomException)
async def validation_exception_handler(_: Request,customExceptuib:CustomException):
    return JSONResponse(
            dict(response="this is json response"),
            status_code=status.HTTP_401_UNAUTHORIZED,
    )

@app.get("/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run('app.app:app', host="127.0.0.1", port=5000, reload=True, workers=1, log_level='debug', access_log=True)