from pydantic import BaseModel
     
class CountryDTO(BaseModel):
    id: str
    name: str