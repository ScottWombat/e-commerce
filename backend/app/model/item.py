from uuid import UUID
from datetime import datetime
from typing import Optional, Dict, Any
from pydantic import BaseModel,Field
from bson import ObjectId


class Item(BaseModel):
    name: str
    description: str = None
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
    

   