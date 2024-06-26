from app.db.mongodb import AsyncIOMotorClient

async def bulk_update_object_id(catalogue_name:str,client: AsyncIOMotorClient) -> dict: # type: ignore
    catalogue_list = ["men","women","couple"]
    catalogue =  await client.catalogue.find_one({"name": catalogue_name})
   
    mens = ["Cock Rings","Strokers","Sex Dolls","Fleshlights","Penis Pumps"]
    await client.category.update_many({
        "name": {"$in": get_category_group(catalogue_name)}
    },
    {"$set": {"catalogue_id": catalogue['_id']}},
    )
   
    if catalogue:
        catalogue['_id'] = str(catalogue['_id'])
        return catalogue
    else:
        return {"message": "Catalogue not found"}  
    
def get_category_group(catalogue_name):
    if catalogue_name == 'men':
        return ["Cock Rings","Strokers","Sex Dolls","Fleshlights","Penis Pumps"]
    if catalogue_name == 'women':
        return ["Dildos","Vibrators"]
    return []