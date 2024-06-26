from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .item import Item
from .cart_status import CartStatus
from .pydantic_object_id import PydanticObjectId_V1

class ProductInventory(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    quantity: int
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True