from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .item import Item
from .cart_status import CartStatus
from .pydantic_object_id import PydanticObjectId_V1

class Product1(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    category_id:  PydanticObjectId_V1
    product_discount_id: PydanticObjectId_V1