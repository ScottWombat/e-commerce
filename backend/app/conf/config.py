import os
from dotenv import load_dotenv,find_dotenv
import logging

load_dotenv(".env")

class Config:
    version = "0.1.0"
    title = "LoveMeSexy"

    db_settings = {
        'db_name': os.getenv('MONGO_DB'),
        'mongodb_url': os.getenv('MONGO_URL'),
        'db_username': os.getenv('MONGO_USER'),
        'db_password': os.getenv('MONGO_PASSWORD'),
        'max_db_conn_count': os.getenv('MAX_CONNECTIONS_COUNT'),
        'min_db_conn_count': os.getenv('MIN_CONNECTIONS_COUNT'),
    }
    
    secret = os.getenv('SECRET')
    algorithm = os.getenv('ALGORITHM')
