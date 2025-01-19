from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from typing import Any,List
from app.db.db import get_db
from motor.motor_asyncio import AsyncIOMotorClient
from app.repository.country_repository import all_countries,count_countries

router = APIRouter(
    prefix="/countries",
    tags=["Countries"],
    responses={404: {"description": "Not found"}},
)

@router.get("/all_countries", response_model=List,response_model_exclude_none=True)
async def get_all_countries(client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    response = await all_countries(client)
    return response;

@router.get("/count_countryies", response_model=List,response_model_exclude_none=True)
async def count_all_countries(client: AsyncIOMotorClient = Depends(get_db)): # type: ignore
    response = await count_countries(client)
    return response;