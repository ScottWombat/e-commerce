from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from typing import Any,List
from app.db.db import get_db
from motor.motor_asyncio import AsyncIOMotorClient
from app.repository.mycollection_repository import all_mycollection

router = APIRouter(
    prefix="/mycollection",
    tags=["My Collection"],
    responses={404: {"description": "Not found"}},
)

@router.get("/all_collection", response_model=List,response_model_exclude_none=True)
async def get_all_collection(client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    response = await all_mycollection(client)
    return response;



    