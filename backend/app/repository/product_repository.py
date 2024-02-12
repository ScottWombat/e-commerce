from app.model.product import Product,ProductList,ProductResponse
from app.db.mongodb import AsyncIOMotorClient
from bson.objectid import ObjectId
import json
async def pagination(client: AsyncIOMotorClient,page: int = 1, limit: int = 10) -> ProductResponse:
    products = client.mydb.product.find({}).skip((page - 1) * limit).limit(limit)
    pass

async def count_products(client: AsyncIOMotorClient) -> ProductResponse:
    try:
        cursor = client.mydb.products.find({})
        docs = await cursor.to_list(None)
        count=0
        for doc in  docs:
            count += 1
        print(f"Count:${count}")
        return ProductResponse(status="success",count=count,msg="Product counted")
    except Exception as e:
        return ProductResponse(status="FAILUE",msg=str(e))
    
async def query_products(catalog: str, category: str, client: AsyncIOMotorClient) -> ProductResponse:
    try:
        cursor = client.mydb.products.find({"catalog": catalog,"category": category},{'_id': 0 })
        docs = await cursor.to_list(None)
        return ProductResponse(status="success",count=1,msg="Item deleted",products=docs)
    except Exception as e:
        return ProductResponse(status="FAILUE",msg=str(e),count=1,products=None)


    
