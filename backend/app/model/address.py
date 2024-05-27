from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional

from .pydantic_object_id import PydanticObjectId_V1
class Address(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    addr: str
    state: str
    zipcode: str
    country: str
    user_object_id:  Optional[PydanticObjectId_V1] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True