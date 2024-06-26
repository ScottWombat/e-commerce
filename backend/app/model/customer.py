from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .address import Address
from .pydantic_object_id import PydanticObjectId_V1

class Customer(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    firstname: str
    surname: str
    addresses: List[Address] = []
    registedUser:  bool = False
    user_id:  Optional[PydanticObjectId_V1] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True