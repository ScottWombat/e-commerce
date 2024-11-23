import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';
import { addItemToCart, removeItemFromCart } from './cart-util';
const initialState = {
  //items: [{ 'id': 1, 'price': 200, 'key': 1 }, { 'id': 2, 'price': 300, 'key': 2 }],
  items: [],
  totalPrice: 0,
  inCart: 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      
      state.items = addItemToCart(state.items, action.payload);
      console.log(state.items)
      
      state.inCart = state.inCart + 1;//action.payload.qty;
      state.totalPrice = 0;
      state.items.map((item) =>{
          state.totalPrice += Number.parseFloat(item.total.toFixed(2));
      })
     
    },
    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload)
      //state.totalPrice = state.totalPrice - (action.payload.price * action.payload.quantity);
      state.inCart = state.inCart - 1;
      state.totalPrice = 0;
      state.items.map((item) =>{
          state.totalPrice += Number.parseFloat(item.total.toFixed(2));
      })
    },
    increaseQty: (state,action) => {
      state.totalPrice = 0;
      state.inCart = state.inCart + 1;
      //let tmp = []
      //let tot = 0
      state.items.map((item) =>{
        if(item.id === action.payload.id){
          item.qty = item.qty + 1;
          item.total = item.total + action.payload.price
          item.total =Number.parseFloat(item.total.toFixed(2));
          /*
          item.total = item.total + action.payload.price
          const re = /^[1-9]\d{0,5}\.[0-9][0-9]$/;
          if(!re.test(String(item.total))){
            console.log("faction incorrect" + item.total)
            item.total =Number.parseFloat(item.total.toFixed(2));
            console.log('formated:' + item.total.toFixed(2))
          }
          */
          //tmp.push(item)
        }
        //else{
          
        //  tmp.push(item)
        //}
        state.totalPrice = state.totalPrice + item.total;
       
      })
      //state.items = tmp;
      //state.totalPrice = 0
      //state.items.map((itm) =>{
      //  state.totalPrice = state.totalPrice + itm.total;
      //})
      //console.log("TT" + state.totalPrice)
      //state.totalPrice = 
    },
    decreaseQty: (state,action) => {
      state.totalPrice = 0;
      state.inCart = state.inCart - 1;
     
      state.items.map((item) =>{
        if(item.id === action.payload.id){
          item.qty = item.qty - 1;
          item.total = item.total - action.payload.price;
          console.log("total" + item.total)
        }
        state.totalPrice = item.total - state.totalPrice;
      })
     
    },
    clearCart: (state) => initialState
  },
})

//store selectors:
export const selectAllItems = (state:RootState) => state.cart.items;
export const getAmountInCart = (state:RootState) => state.cart.inCart;
export const getTotalPrice = (state:RootState) => state.cart.totalPrice;


// Memoized selector using createSelector from Redux Toolkit
// It only recalculates when entities change
export const selectItemById = createSelector(
  [selectAllItems, (state, id) => id], 
  (items,id) => items.map(item => item.id === id)
);

export const { addItem, removeItem, increaseQty,decreaseQty,clearCart } = cartSlice.actions;

export const getCurrentCart = (state) => state.shopping_cart.cartItems;



export default cartSlice.reducer;

