from fastapi import APIRouter, Depends, HTTPException
from datetime import datetime
from app.model.product import Product,ProductResponse

from app.db.mongodb import AsyncIOMotorClient, get_database
from app.repository.product_repository import count_products, query_products

router = APIRouter(
    prefix="/products",
    tags=["Products"],
    responses={404: {"description": "Not found"}},
)

@router.get("/count_products", response_model=ProductResponse,response_model_exclude_none=True)
async def count(client: AsyncIOMotorClient = Depends(get_database)):
    itemResponse = await count_products(client)
    return itemResponse

@router.get("/query_products/{catalog}/{category}", response_model=ProductResponse,response_model_exclude_none=True)
async def queryproduct(catalog: str, category: str, client: AsyncIOMotorClient = Depends(get_database)):
    print("UUUUUUUUU:" +category+":" + catalog)
    productResponse = await query_products(catalog,category,client)
    #for document in itemResponse:
    #    print(document)
    #print(itemResponse)
    return productResponse