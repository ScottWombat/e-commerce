from uuid import UUID
from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel,Field
from bson import ObjectId
from .pydantic_object_id import PydanticObjectId_V1
from .price import Price
from .extra import Extra
class Item(BaseModel):
    #id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    id: int
    name: str
    product_id: str
    description: str = None
    catalog: str = None
    category: str = None
    price: Price
    extra: List[Extra]= None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True

class ItemResponse(BaseModel):
    status: str
    id: Optional[str] = None
    item: Optional[Item] = None
    count: Optional[int] = None
    msg: Optional[str] = None
    
    def dict(self, *args, **kwargs):
        if kwargs and kwargs.get("exclude_none") is not None:
            kwargs["exclude_none"] = True
            return BaseModel.dict(self, *args, **kwargs)
    

   