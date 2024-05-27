from app.model.product import Product,ProductList,ProductResponse
from app.db.mongodb import AsyncIOMotorClient
from bson import ObjectId
from typing import List
import json
async def pagination(client: AsyncIOMotorClient,page: int = 1, limit: int = 10) -> ProductResponse: # type: ignore
    products = client.mydb.product.find({}).skip((page - 1) * limit).limit(limit)
    pass

async def count_products(client: AsyncIOMotorClient) -> ProductResponse: # type: ignore
    try:
        cursor = client.products.find({})
        docs = await cursor.to_list(None)
        count=0
        for doc in  docs:
            count += 1
        print(f"Count:${count}")
        return ProductResponse(status="success",count=count,msg="Product counted")
    except Exception as e:
        return ProductResponse(status="FAILUE",msg=str(e))
    
async def query_products(catalog: str, category: str, client: AsyncIOMotorClient) -> dict: # type: ignore
    product_list = []
    try:
        cursor = client.products.find({"catalog": catalog,"category": category})
        docs = await cursor.to_list(None)
        for doc in docs:
            product = Product(id=str(doc['_id']))
            product_list.append(product)
        
        return [{'status_code': '200','data': product_list,'size': len(product_list)}]#ProductResponse(status="success",count=1,msg="Item deleted",products=prodcut)
    except Exception as e:
        return [{'status_code': '404','msg':str(e)}]#ProductResponse(status="FAILUE",msg=str(e),count=1,products=None)


    
