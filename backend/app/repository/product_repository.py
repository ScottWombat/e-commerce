from app.model.product import Product,ProductList,ProductResponse,ProductDTO
from app.db.mongodb import AsyncIOMotorClient
from bson import ObjectId,json_util
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

async def query_by_category_name_old(query_data:dict, client: AsyncIOMotorClient) -> dict:
    cursor =client.product.find({"category":query_data['category_name']})
    docs = await cursor.to_list(None)
    for doc in docs:
      print(doc)
    return []
    
async def query_by_category_name(category_name:str, client: AsyncIOMotorClient) -> dict: # type: ignore
 
    response =  client.product.aggregate([
    #{ "$limit" : query_data['page_size'] },
    #{ "$sort": {query_data['sort_field']:1}},
    #{ "$skip" : (query_data['page_nb'] - 1) * query_data['page_size'] if query_data['page_nb'] > 0 else 0 },
    #{ "$skip" : skip},
    { "$match": { "category": category_name } },
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
    product_list = []
    for doc in rs:
      product = ProductDTO(id=str(doc['_id']),
                           name=doc['name'],
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


    
