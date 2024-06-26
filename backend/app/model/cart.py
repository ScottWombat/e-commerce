from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .item import Item
from .cart_status import CartStatus
from .pydantic_object_id import PydanticObjectId_V1

class Cart(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    token: str
    status: CartStatus = CartStatus.CREATED
    items: List[Item] = []
    customer_id:  Optional[PydanticObjectId_V1] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True
        use_enum_values = True