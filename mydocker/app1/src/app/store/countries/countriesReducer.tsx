import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';
import country_list from 'app/data/all_country';


export const countrySlice = createSlice({
    name: "country",
    initialState:{
        countries: country_list
    },
    reducers:{
        all: (state)=>{
            state.countries= [...state.countries]
        }
    }
})

export const allCountries = (state:RootState) => state.country.countries;

export default countrySlice.reducer;

  