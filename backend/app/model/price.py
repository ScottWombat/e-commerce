from pydantic import BaseModel

class Price(BaseModel):
    sale: float
    base: float
    discount: int
    currency: str