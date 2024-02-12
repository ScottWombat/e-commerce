from app.model.item import Item,ItemResponse
from app.db.mongodb import AsyncIOMotorClient
from bson.objectid import ObjectId

async def pagination(client: AsyncIOMotorClient,page: int = 1, limit: int = 10) -> ItemResponse:
    items = client.mydatabase.items.find({}).skip((page - 1) * limit).limit(limit)
    pass

async def count_items(client: AsyncIOMotorClient) -> ItemResponse:
    print("DDDDDDDDDDDDDD")
    try:
        cursor = client.mydb.products.find({})
        docs = await cursor.to_list(None)
        count=0
        for doc in  docs:
            count += 1
        print(f"Count:${count}")
        return ItemResponse(status="success",count=count,msg="Item counted")
    except Exception as e:
        #return ItemResponse(status="FAILUE",msg=str(e))
        return ItemResponse(status="FAILUE",msg='l')
        

async def delete_item_by_id(client: AsyncIOMotorClient,id: str) -> ItemResponse:
    try:
        result = await client.mydatabase.items.delete_one({"_id": ObjectId(id)})
        return ItemResponse(status="success",id=id,msg="Item deleted")
    except Exception as e:
        return ItemResponse(status="FAILUE",msg=str(e))

async def delete_all_items(client: AsyncIOMotorClient)-> ItemResponse:
    try:
        cursor = client.mydatabase.items.find({})
        docs = await cursor.to_list(None)
        for d in docs:
            await client.mydatabase.items.delete_one({"_id": ObjectId(d["_id"])})
        #cursor_items.delete()
        #result = await client.mydatabase.items.delete_many()
        return ItemResponse(status="success",msg="All items deleted")
    except Exception as e:
        return ItemResponse(status="FAILUE",msg=str(e))

async def create_item(item: Item, client: AsyncIOMotorClient) -> ItemResponse:
    try:
        result = await client.mydatabase.items.insert_one(item.dict())
        return ItemResponse(status="success",id=str(result.inserted_id),item=item)
    except Exception as e:
        return ItemResponse(status="FAILUE",msg=str(e))
    
