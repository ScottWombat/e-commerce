from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .payment_methods import PaymentMethods
from .payment_status import PaymentStatus
from .pydantic_object_id import PydanticObjectId_V1

class Payment(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    order_id: PydanticObjectId_V1
    customer_id:  PydanticObjectId_V1
    payment_method:  PaymentMethods
    payment_status: PaymentStatus
    amount: float
    payment_date: datetime
    payment_details: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True