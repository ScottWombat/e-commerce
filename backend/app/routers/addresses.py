from fastapi import APIRouter, Body, Depends, HTTPException
from typing import Annotated
from datetime import datetime
from bson import ObjectId
from app.db.db import get_db
from app.db.db import AsyncIOMotorClient, get_db
from app.repository.product_repository import count_products, query_products
from app.model.address import Address

from app.repository.users_repository import verify_email
from app.repository.address_repository import add_address

router = APIRouter(
    prefix="/addresses",
    tags=["Addresses"],
    responses={404: {"description": "Not found"}},
)


@router.post("/add_address")
async def addAddressToUser(email:Annotated[str, Body()], address:Annotated[Address, Body(embed=True)],client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    response =  await verify_email(email,client)
    object_id = response["object_id"]
 
    user_object_id = ObjectId(object_id)
 
    l = await add_address(user_object_id,address,client)
    return {'emial':email,'address':address}

