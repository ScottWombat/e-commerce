from uuid import UUID
from datetime import datetime
from typing import Optional, Dict, Any,List
from pydantic import BaseModel,Field
from bson import ObjectId


class Product(BaseModel):
    id: int
    name: str
    catalog: str
    category: str
    price: float
    discount: int
    rating: int
    viewers: int
    description: str = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True

class ProductList(BaseModel):
    products: List[Product]

class ProductResponse(BaseModel):
    status: str
    id: Optional[str] = None
    products: Optional[List[Product]] = None
    #product = Optional[Product] = None                                                      
    count: Optional[int] = None
    msg: Optional[str] = None
    
    def dict(self, *args, **kwargs):
        if kwargs and kwargs.get("exclude_none") is not None:
            kwargs["exclude_none"] = True
            return BaseModel.dict(self, *args, **kwargs)
    

   