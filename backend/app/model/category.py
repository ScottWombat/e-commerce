from datetime import datetime
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any,List
from .pydantic_object_id import PydanticObjectId_V1

class Category(BaseModel):
    id:  Optional[PydanticObjectId_V1] = Field(alias="_id", default=None)
    name: str
    description: Optional[str] = None
    catalog_id:  Optional[PydanticObjectId_V1] = None
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)
    class Config:
        arbitrary_types_allowed = True
        populate_by_name = True
        
class CategoryResponse(BaseModel):
    status: str
    id: Optional[str] = None
    products: Optional[List[Category]] = None
    
    def dict(self, *args, **kwargs):
        if kwargs and kwargs.get("exclude_none") is not None:
            kwargs["exclude_none"] = True
            return BaseModel.dict(self, *args, **kwargs)