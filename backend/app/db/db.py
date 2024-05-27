import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import logging

from app.conf.config import Config

db_client: AsyncIOMotorClient = None # type: ignore

async def get_db() -> AsyncIOMotorClient: # type: ignore
    db_name = Config.db_settings.get('db_name')
    return db_client[db_name]


async def connect_and_init_db():
    global db_client
    try:
        db_client = AsyncIOMotorClient(
            Config.db_settings.get('mongodb_url'),
            username=Config.db_settings.get('db_username'),
            password=Config.db_settings.get('db_password'),
            maxPoolSize=Config.db_settings.get('max_db_conn_count'),
            minPoolSize=Config.db_settings.get('min_db_conn_count'),
            uuidRepresentation="standard",
        )
        logging.info('Connected to mongo.')
    except Exception as e:
        logging.exception(f'Could not connect to mongo: {e}')
        raise


async def close_db_connect():
    global db_client
    if db_client is None:
        logging.warning('Connection is None, nothing to close.')
        return
    db_client.close()
    db_client = None
    logging.info('Mongo connection closed.')