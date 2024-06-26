import os, sys
import logging
#from logging.config import dictConfig
from typing import Optional, List
from fastapi import Depends,FastAPI, Body, status, Request
from fastapi.openapi.utils import get_openapi
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from starlette.middleware.sessions import SessionMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
#from fastapi.responses import JSONResponse
#from pydantic import ConfigDict, BaseModel, Field, EmailStr
#from pydantic.functional_validators import BeforeValidator
#from typing_extensions import Annotated
#from bson import ObjectId
#from pymongo import ReturnDocument
#from motor.motor_asyncio import AsyncIOMotorClient
#from app.model.item import Item

from app.routers.item import router as items_router
from app.routers.users import router as users_router
from app.routers.products import router as products_router
from app.routers.addresses import router as addresses_router
from app.routers.mongo import router as healthcheck_router
from app.routers.file_upload import router as file_router
from app.routers.category import router as category_router

from app.common.http_errors import BadRequest, UnprocessableError

from app.db.db import connect_and_init_db, close_db_connect
from app.db.mongodb_utils import connect_to_mongo, close_mongo_connection
from app.dependencies.header_token import get_query_token, get_token_header
#from app.db.mongodb import AsyncIOMotorClient, get_database

#from app.exceptions.custom_exception import CustomException

from app.middleware.timing import TimingMiddleware
from app.middleware.signature import SignatureMiddleware
from app.conf.config import Config
#from app.common.simple_logger import logger
from app.common.logging import setup_logging
import app.routers as routers
from app.model.cart import Cart
from app.model.item import Item
from app.model.price import Price
from app.model.extra import Extra

from fastapi.encoders import jsonable_encoder
#MONGO_URL = "mongodb://root:example@172.18.0.2:27017?uuidRepresentation=standard"
#MONGO_DB_NAME = "mydatabase"
#MONGO_CLIENT: AsyncIOMotorClient = None

#dictConfig(log_config)
setup_logging()

app = FastAPI()

# openapi schema
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title=Config.title,
        version=Config.version,
        routes=app.routes
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

app.router.prefix = "/api"


app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=["localhost"]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(SessionMiddleware, secret_key="some-random-string")
@app.middleware("http")
async def some_middleware(request: Request, call_next):
    response = await call_next(request)
    session = request.cookies.get('session')
    if session:
        response.set_cookie(key='session', value=request.cookies.get('session'), httponly=True)
    return response
app.add_middleware(GZipMiddleware, minimum_size=1000)
app.add_middleware(SignatureMiddleware)
app.add_middleware(TimingMiddleware)

#app.add_event_handler("startup", connect_to_mongo)
#app.add_event_handler("shutdown", close_mongo_connection)

app.add_event_handler("startup", connect_and_init_db)
app.add_event_handler("shutdown", close_db_connect)

#app.include_router(items_router)
app.include_router(users_router)
app.include_router(products_router)
app.include_router(addresses_router)
app.include_router(healthcheck_router)
app.include_router(file_router)
app.include_router(category_router)
#for router in map(routers.__dict__.get, routers.__all__):
#   app.include_router(router)
#app.include_router(router)

# HTTP error responses
@app.exception_handler(BadRequest)
async def bad_request_handler(req: Request, exc: BadRequest) -> JSONResponse:
    return exc.gen_err_resp()


@app.exception_handler(RequestValidationError)
async def invalid_req_handler(req: Request,exc: RequestValidationError) -> JSONResponse:
    logging.error(f'Request invalid. {str(exc)}')
    return JSONResponse(
        status_code=400,
        content={
            "type": "about:blank",
            'title': 'Bad Request',
            'status': 400,
            'detail': [str(exc)]
        }
    )


@app.exception_handler(UnprocessableError)
async def unprocessable_error_handler(
    req: Request,
    exc: UnprocessableError
) -> JSONResponse:
    return exc.gen_err_resp()

@app.get("/")
async def root(request: Request):
    #logger.info("root")
    request.session["my_var"] = "1234"
    e1 = Extra(description="dd1")
    e2 = Extra(description="dd1")
    all_e = [e1,e2]
    p = Price(sale=12.00,base=13.0,discount=10,currency="us")
    all_items =[{'id':1,'name':'d1','product_id':'12','price':p,'extra':all_e},
                {'id':2,'name':'d2','product_id':'12','price':p}]
    item_list = [Item(**item) for item in all_items]
    c = Cart(token="dddd",registerdUser=True,items=item_list)
    
    #i1 = Item(name='i1')
    #i2 = Item(name="i2")
   
    print(jsonable_encoder(c))
    logging.info(f"in root: {c}")
    return {"message": f"Hello World {Config.title}"}

@app.get("/my_var")
async def myVar(request: Request):
    my_var = request.session.get("my_var", None)
   
    return my_var
#if __name__ == "__main__":
#    import uvicorn
#    uvicorn.run('app.app:app', host="127.0.0.1", port=5000, reload=True, workers=1, log_level='debug', access_log=True)