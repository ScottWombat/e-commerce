from app.model.product import Product,ProductList,ProductResponse,ProductDTO

from app.db.db import AsyncIOMotorClient,get_db

#from bson import ObjectId,json_util
from bson.json_util import dumps
from typing import List,Dict
from bson import ObjectId
from cachetools import cached, TTLCache

@cached(cache=TTLCache(maxsize=1024, ttl=60))
async def count_countries(client: AsyncIOMotorClient) -> List: # type: ignore
    try:
        rows = await client.countries.count_documents({})
        return [{'status_code': '200','data': rows}]#ProductResponse(status="success",count=1,msg="Item deleted",countries=country_list)
    except Exception as e:
        return [{'status_code': '404','msg':str(e)}]
      

async def all_countries(client: AsyncIOMotorClient) -> List: # type: ignore
    country_list = []
 
    try:
        cursor = client.countries.find()
        docs = await cursor.to_list(None)
        
        for doc in  docs:
          print(doc['cities'])
          print(doc['states'])
          country_list.append(doc['name'])  
        
        return [{'status_code': '200','data': country_list}]#ProductResponse(status="success",count=1,msg="Item deleted",countries=country_list)
    except Exception as e:
        return [{'status_code': '404','msg':str(e)}]
    


