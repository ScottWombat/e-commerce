import math
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from datetime import datetime
from app.model.product import Product,ProductResponse
from app.db.db import get_db
from app.db.db import AsyncIOMotorClient, get_db
from app.repository.product_repository import query_category_size,count_products, query_products,query_by_category_name
from typing import Optional, Dict, Any,List
d = [
    {"User": "a", "count": 1},
    {"User": "b", "count": 2},
]
router = APIRouter(
    prefix="/products",
    tags=["Products"],
    responses={404: {"description": "Not found"}},
)

@router.get("/count_products", response_model=ProductResponse,response_model_exclude_none=True)
async def count(client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    itemResponse = await count_products(client)
    return itemResponse

@router.get("/products_by_catalogue_category", include_in_schema=True, response_class=JSONResponse)
async def query_by_category(catalogue:str,category: str,per_page: int=20,page_no: int=0,client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    total_records =  await query_category_size(category,client)
    skip = page_no * per_page if page_no > 0 else 0 
   
    data = {
        'category': category,
        'sort_type': 1,
        'per_page': per_page,
        'page_no': page_no,
        'skip': skip
    }
    #data1 = {"category" : category}
    productResponse = await query_by_category_name(data,client)
    
    total_pages = math.ceil(total_records/per_page)
    #view_items = (page_no+1) * per_page if page_no > 0 else per_page
    if page_no == total_pages-1:
        view_items = total_records;
        progress_bar= 99;
    else:
        view_items = (page_no+1) * per_page if page_no > 0 else per_page
        progress_bar =  math.floor((per_page * (page_no+1) * 100)/total_records)

    #progress_bar = math.floor((per_page * (page_no+1) * 100)/total_records) if page_no < total_pages else 99
    return {"view_items": view_items,"progress_bar": progress_bar,"total_items": total_records,"page_no":page_no,"page_size":per_page,"total_records":total_records,"total_pages":total_pages,"category": category,"catalogue": catalogue,"data": productResponse}
    #return []

@router.get("/get_products_by_category/{category_name}", response_model=List,response_model_exclude_none=True)
async def query_by_category_old(category_name: str,client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    #productResponse = await query_by_category_name(category_name,client)
    
    #return productResponse
    return []

@router.get("/query_products/{catalog}/{category}", response_model=List,response_model_exclude_none=True)
async def queryproduct(catalog: str, category: str, client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    filters ={'catalog':catalog,'category':category}
    query_data ={
        'filters': filters,
        'sort_field': 'price',
        'sort_type': 1,
        'page_size': 2,
        'page_nb': 0
    }
    productResponse = await query_products(query_data,client)
    return productResponse



@router.get("/json", include_in_schema=True, response_class=JSONResponse)
async def dbget():
    return {"page":2,"per_page":3,"total":6,"total_pages":3,"data": d}