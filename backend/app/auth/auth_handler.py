import time
from typing import Dict
import jwt
#from decouple import config
from app.conf.config import Config

JWT_SECRET = Config.secret
JWT_ALGORITHM = Config.algorithm

#print("D")
#print(JWT_SECRET)

def token_response(token: str):
    return {
        "access_token": token
    }

def signJWT(user_id: str) -> Dict[str, str]:
    payload = {
        "user_id": user_id,
        "expires": time.time() + 600
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

    return token_response(token)