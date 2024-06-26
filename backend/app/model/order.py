from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional,List
from .order_line import OrderLine
from .order_status import OrderStatus
from .pydantic_object_id import PydanticObjectId_V1

class Order(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    orderLines: List[OrderLine] = []
    sessionId: str
    token: str
    status: OrderStatus = OrderStatus.CREATED
    subTotal: float
    tax: float
    shipping: float
    total: float
    promo:float
    discount: float
    grandTotal:float
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True

    