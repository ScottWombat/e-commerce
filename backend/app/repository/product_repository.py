from app.model.product import Product,ProductList,ProductResponse,ProductDTO
from app.db.mongodb import AsyncIOMotorClient
#from bson import ObjectId,json_util
from bson.json_util import dumps
from typing import List,Dict
import json

from datetime import datetime
from typing import Any

from bson import ObjectId

class MongoJSONEncoder(json.JSONEncoder):
    def default(self, o: Any) -> Any:
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)
      
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

async def query_category_size(category:str, client: AsyncIOMotorClient) -> int: # type: ignore
 
  response =   client.product.aggregate([
    { "$match": { "category": category } },
    {
      "$count": "total_documents"
    }
  ])
  docs = await response.to_list(None)
  
  return docs[0]['total_documents']

async def query_by_category_name(query_data: Dict, client: AsyncIOMotorClient) -> dict: # type: ignore
    
    category = query_data['category']
    lists =client.product.find({"category": category},
    {"id": {"$toString": "$_id"},
    "_id": 0,"category":1,"name":1,"image_name":1,"description":1,"price":1,"percent_discount":1,"sale":1,"rating":1,"viewers":1
    }).skip(query_data['skip']).limit(query_data['per_page'])
    
    product_list=[]
    
    async for doc in lists:
      print("DDDDOC")
      discount_price = doc['price'] - ((doc['percent_discount']/100)*doc['price'])
      doc['discount_price'] = round(discount_price, 2)
      data_json = MongoJSONEncoder().encode(doc)
      json_string = dumps(doc,default=str)
      product_list.append(json.loads(json_string))

    return product_list

async def query_by_category_name_work(query_data:dict, client: AsyncIOMotorClient) -> dict: # type: ignore
    
    cursor =client.product.find({"category": query_data["category"]}).skip(80).limit(20)
    docs = await cursor.to_list(None)
    for doc in docs:
      print(dumps(cursor))
    
    return []
    
async def query_by_category_name_old(query_data:dict, client: AsyncIOMotorClient) -> dict: # type: ignore
    pageSize = 20
    pageNumber = 1
    response =  client.product.aggregate([
    { "$limit" : 20},
    #{ "$skip" : (query_data['page_nb'] - 1) * query_data['page_size'] if query_data['page_nb'] > 0 else 0 },
    { "$skip" : 20},
    #{ "$match": { "category": 'Cock Rings' } },
    { "$lookup":
      {
        "from": "category",
        "localField": "category",
        "foreignField": "name",
        "pipeline": [
        {
          "$lookup": {
            "from": "catalogue",
            "localField": "catalogue_id",
            "foreignField": "_id",
            "as": "catalogue",
          },
        }
      ],
        "as": "category"
      }
    },
    {"$unwind" : "$category"},
    ])
    rs = await response.to_list(None)
    #print("DDDD")
    #print(rs)
    product_list = []
    for doc in rs:
      product = ProductDTO(id=str(doc['_id']),
                           name=doc['name'],
                           image=doc['image_name'],
                           price=doc['price'],
                           discount=doc['percent_discount'],
                           rating=doc['rating'],
                           viewers=doc['viewers'],
                           description=doc['description'],
                           category=doc['category']['name'],
                           catalogue=doc['category']['catalogue'][0]['name'])
      product_list.append(product)
   
    
    return product_list

async def query_products(query_data:dict, client: AsyncIOMotorClient) -> dict: # type: ignore
    product_list = []
    try:
        #cursor = client.products.find({"catalog": catalog,"category": category}).sort('rating',1).skip(0).limit(2)
        cursor = client.products.find(query_data['filters']) \
                                .sort(query_data['sort_field'],query_data['sort_type']) \
                                .skip(query_data['page_nb'] - 1) * query_data['page_size'] if query_data['page_nb'] > 0 else 0 \
                                .limit(query_data['page_size'])
        docs = await cursor.to_list(query_data['page_size'])
        #docs = client.products.find({"catalog": catalog,"category": category}).skip(0).limit(5).to_list(5)
        for doc in docs:
            product = Product(id=str(doc['_id']),name=doc['name'],price=doc['price'],discount=doc['discount'],rating=doc['rating'])
            product_list.append(product)
        
        return [{'status_code': '200','data': product_list,'size': len(product_list)}]#ProductResponse(status="success",count=1,msg="Item deleted",products=prodcut)
    except Exception as e:
        return [{'status_code': '404','msg':str(e)}]#ProductResponse(status="FAILUE",msg=str(e),count=1,products=None)


    
