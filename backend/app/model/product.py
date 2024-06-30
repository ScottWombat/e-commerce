from uuid import UUID
from datetime import datetime
from typing import Optional, Dict, Any,List
from pydantic import RootModel,BaseModel,Field
from bson import ObjectId

class Product(BaseModel):
    id: str
    name: Optional[str] = None
    catalog: Optional[str] = None
    category: Optional[str] = None
    price: Optional[float] = None
    discount: Optional[int] = None
    rating: Optional[int] = None
    viewers: Optional[int] = None
    description: Optional[str] = None
    category: Optional[str] = None
    catalogue: Optional[str] = None
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
    
class ProductDTO(BaseModel):
    id: str
    name: str
    image: str
    price: float
    discount: int
    rating: int
    viewers: int
    description: str
    category: str
    catalogue: str
   