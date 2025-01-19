from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from typing import Any,List
import requests
import json
router = APIRouter(
    prefix="/json",
    tags=["JsonGenerator"],
    responses={404: {"description": "Not found"}},
)

@router.get("/all_states")
async def all_states(): # type: ignore
    country_state_data = requests.get('https://countriesnow.space/api/v0.1/countries/states').json()
   

    country_city_data = requests.get('https://countriesnow.space/api/v0.1/countries').json()
    #print(test_get_response)
    #for k in test_get_response:
    
    data =[]
    for state_data in country_state_data['data']:
        country_name = state_data['name']
        states= []
        for name in state_data['states']:
            states.append(name['name'])
        cities = []
        for city_data in country_city_data['data']:
            if(city_data['country'] == country_name):
                #print(country_name + ":" + city_data['country'])
                #print("states")
                #print(states)
                #print("cities")
                cities = city_data['cities']
                
        row={"name":country_name,"states": states,"cities":cities}
        data.append(row)
      
    #print(json.dumps(data))
    with open('data.json', 'w') as f:
        json.dump(data, f,ensure_ascii=False)
    return {"message": 'success'}

