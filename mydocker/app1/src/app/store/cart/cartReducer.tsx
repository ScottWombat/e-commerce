import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';
import { addItemToCart, removeItemFromCart } from './cart-util';
const initialState = {
  //items: [{ 'id': 1, 'price': 200, 'key': 1 }, { 'id': 2, 'price': 300, 'key': 2 }],
  items: [],
  totalPrice: 0,
  inCart: 0,
  addresses: [],
  grandTotal:0,
  deliveryFee: 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.info('items')
      console.log(state.items)
      state.items = addItemToCart(state.items, action.payload);
      state.inCart = state.inCart + 1;//action.payload.qty;
      
      state.items.map((item) =>{
          state.totalPrice += Number.parseFloat(item.total.toFixed(2));
      })
    },
    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload)
      state.inCart = state.inCart - 1;
      state.totalPrice = 0;
      state.items.map((item) =>{
          state.totalPrice += Number.parseFloat(item.total.toFixed(2));
      })
    },
    updateCart:(state,action) => {
      console.log("Upda")
      console.log(action.payload.items)
      state.items = action.payload.items
      state.totalPrice = action.payload.totalPrice
    },
    increaseQty: (state,action) => {
      state.totalPrice = 0;
      state.inCart = state.inCart + 1;
      
      state.items.map((item) =>{
        if(item.id === action.payload.id){
          item.qty = item.qty + 1;
          item.total = item.total + action.payload.price
          item.total =Number.parseFloat(item.total.toFixed(2));
          
        }
        state.totalPrice = state.totalPrice + item.total;
       
      })
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
    addAddress: (state,action) => {
        state.addresses.push(action.payload)
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

export const { addItem, removeItem,updateCart, increaseQty,decreaseQty,clearCart,addAddress } = cartSlice.actions;

export const getCurrentCart = (state) => state.shopping_cart.cartItems;



export default cartSlice.reducer;

