import logging
from fastapi import HTTPException

from app.model.user import User
from app.model.response import Response
from fastapi.encoders import jsonable_encoder
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from app.model.address import Address
from typing import List


async def find_address_by_email(userObjectId: ObjectId,client: AsyncIOMotorClient) -> List: # type: ignore
    print(f"dddo {userObjectId}")
    try:
        cursor = client.addresses.find({'user_object_id': str(userObjectId)})
        docs = await cursor.to_list(None)
        #print(type(docs))
        #de =[doc async for doc in client.addresses.find({'user_object_id': str(userObjectId)})]
        addr = []
        for doc in docs:
            addr.append(Address(**doc))
        return addr
        #return {"addresses":addr}
        #return docs
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

async def add_address(userObjectId: ObjectId,address: Address,client: AsyncIOMotorClient) -> Response: # type: ignore
    address.__dict__.update({'_id':ObjectId()})
    address.__dict__.update({'user_object_id':userObjectId})
    data = jsonable_encoder(address)
    #print(f'data: {data}')
    try:
        result = await client.addresses.insert_one(data)
        objectId =result.inserted_id
        return Response(msg='New user added',id=str(objectId))
    except Exception as e:
        raise HTTPException(status_code=424, detail='Unable to create new an user')