from app.model.product import Product,ProductList,ProductResponse,ProductDTO

from app.db.db import AsyncIOMotorClient,get_db

#from bson import ObjectId,json_util
from bson.json_util import dumps
from typing import List,Dict
from bson import ObjectId
from cachetools import cached, TTLCache
from bson.json_util import dumps
import json
from datetime import datetime
from typing import Any

class MongoJSONEncoder(json.JSONEncoder):
    def default(self, o: Any) -> Any:
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)
    
async def all_mycollection(client: AsyncIOMotorClient) -> List: # type: ignore
    mycollection_list = []
 
    try:
        cursor = client.mycollection.find()
        docs = await cursor.to_list(None)
        
        for doc in  docs:
            mycollection_list.append({'id':str(doc['_id']),'name':doc['name']})  
        
        return [{'status_code': '200','data': mycollection_list}]#ProductResponse(status="success",count=1,msg="Item deleted",countries=country_list)
    except Exception as e:
        return [{'status_code': '404','msg':str(e)}]