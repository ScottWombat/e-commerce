from pydantic import BaseModel
from typing import Optional

class Response(BaseModel):
    id: Optional[str] = None
    msg: Optional[str] = None
    