from app.db.mongodb import AsyncIOMotorClient, get_database
from app.model.item import Item
async def add_item(item: Item) -> Item:
    conn = get_database()
    #collection = conn["items"]
    #result = await collection.insert_one(item.dict())
    #item.id = str(result.inserted_id)
    return item