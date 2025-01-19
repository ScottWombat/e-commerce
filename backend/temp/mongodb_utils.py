import logging
import sys
from motor.motor_asyncio import AsyncIOMotorClient

from .mongodb import db

##MONGO_URL = "mongodb://root:example@172.18.0.3:27017?uuidRepresentation=standard"
#MONGO_DB_NAME = "mydb"


logger = logging.getLogger("app-logger")


async def connect_to_mongo():
    logging.info("Connecting to database...")
    db.client = AsyncIOMotorClient("mongodb://root:example@172.26.0.3:27017?uuidRepresentation=standard",
                                   maxPoolSize=3,
                                   minPoolSize=2)
    #print("Datase connected")
    logger.info("Database connected！")


async def close_mongo_connection():
    logging.info("Closing database connection...")
    db.client.close()
    logging.info("Database closed！")