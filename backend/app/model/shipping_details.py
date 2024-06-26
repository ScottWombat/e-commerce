from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .order_line import OrderLine
from .transaction_status import TransactionStatus
from .pydantic_object_id import PydanticObjectId_V1

class ShippingDetails(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    customer_id: PydanticObjectId_V1
    order_id: PydanticObjectId_V1
    shipping_date: datetime
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True