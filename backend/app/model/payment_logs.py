from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .item import Item
from .cart_status import CartStatus
from .pydantic_object_id import PydanticObjectId_V1

class PaymentLog(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    payment_id: PydanticObjectId_V1
    log_message: str
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True