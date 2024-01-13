from fastapi import APIRouter, Depends, HTTPException
from datetime import datetime
from app.model.item import Item,ItemResponse

from app.db.mongodb import AsyncIOMotorClient, get_database
from app.repository.item_repository import create_item,delete_item_by_id,delete_all_items,count_items

router = APIRouter(
    prefix="/items",
    tags=["Items"],
    responses={404: {"description": "Not found"}},
)
@router.post("/count_items", response_model=ItemResponse,response_model_exclude_none=True)
async def count(item: Item,client: AsyncIOMotorClient = Depends(get_database)):
    itemResponse = await count_items(client)
    return itemResponse


@router.post("/add_item", response_model=ItemResponse,response_model_exclude_none=True)
async def add_item(item: Item,client: AsyncIOMotorClient = Depends(get_database)):
    itemResponse = await create_item(item,client)
    return itemResponse

@router.post("/delete_item_by_id", response_model=ItemResponse,response_model_exclude_none=True)
async def find_item_by_id(id: str,client: AsyncIOMotorClient = Depends(get_database)):
    itemResponse = await delete_item_by_id(client,id)
    return itemResponse

@router.post("/delete_all_items", response_model=ItemResponse,response_model_exclude_none=True)
async def delete_items(client: AsyncIOMotorClient = Depends(get_database)):
    itemResponse = await delete_all_items(client)
    return itemResponse
    #pass
    

