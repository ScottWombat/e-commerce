import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';

const initialState = {
  //items: [{ 'id': 1, 'price': 200, 'key': 1 }, { 'id': 2, 'price': 300, 'key': 2 }],
  items: [],
  totalPrice: 0,
  inCart: 0,
  customer: [],
  addresses:[],
  payment: []
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        proceed: (state,action) => {

        },
        clearCart: (state) => initialState
    }
})


export default checkoutSlice.reducer;