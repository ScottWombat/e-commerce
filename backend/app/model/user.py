from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List



fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str

#class User(BaseModelEncoder):
class User(BaseModel):
    id: str 
    email: str
    password: str
    firstname: str
    surname: str
    dob: str
    preference: str
    enabled: bool
    subscribed: bool
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True
        

class UserInDB(User):
    hashed_password: str