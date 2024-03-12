import logging

from motor.motor_asyncio import AsyncIOMotorClient

from .mongodb import db

##MONGO_URL = "mongodb://root:example@172.18.0.3:27017?uuidRepresentation=standard"
#MONGO_DB_NAME = "mydb"

async def connect_to_mongo():
    logging.info("Connecting to database...")
    db.client = AsyncIOMotorClient("mongodb://root:example@172.26.0.3:27017?uuidRepresentation=standard",
                                   maxPoolSize=2,
                                   minPoolSize=2)
    logging.info("Database connected！")


async def close_mongo_connection():
    logging.info("Closing database connection...")
    db.client.close()
    logging.info("Database closed！")