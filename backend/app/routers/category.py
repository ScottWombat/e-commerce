from fastapi import APIRouter, Body, Depends, HTTPException
from typing import Annotated
from datetime import datetime
from bson import ObjectId
from app.db.db import get_db
from app.db.mongodb import AsyncIOMotorClient, get_database
from app.repository.category_repository import bulk_update_object_id
from app.model.category import Category,CategoryResponse



router = APIRouter(
    prefix="/category",
    tags=["Category"],
    responses={404: {"description": "Not found"}},
)


@router.get("/update_object_id/{catalogue_name}", response_model=dict,response_model_exclude_none=True)
async def updateObjectId(catalogue_name:str,client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    
    dict1 = await bulk_update_object_id(catalogue_name,client)
    return dict1