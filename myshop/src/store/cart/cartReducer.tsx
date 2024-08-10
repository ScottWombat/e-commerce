import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from 'src/store';
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
     
      let totalPrice = state.totalPrice + (action.payload.discount_price * action.payload.qty)
   
      state.totalPrice = Number.parseFloat(totalPrice.toFixed(2));
      state.inCart = state.inCart + action.payload.qty;
    },
    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload)
      //state.totalPrice = state.totalPrice - (action.payload.price * action.payload.quantity);
      state.inCart = state.inCart - 1;
    },
    increaseQty: (state,action) => {
      state.inCart = state.inCart + 1;
      let tmp = []
      let tot = 0
      state.items.map((item) =>{
        if(item.id === action.payload.id){
          item.qty = item.qty + 1;
         
          item.total = item.total + action.payload.price
          
          tmp.push(item)
        }else{
          
          tmp.push(item)
        }
        
       
      })
      state.items = tmp;
      state.totalPrice = 0
      state.items.map((itm) =>{
        state.totalPrice = state.totalPrice + itm.total;
      })
      
      //state.totalPrice = 
    },
    decreaseQty: (state,action) => {
      state.inCart = state.inCart - 1;
      let tmp = []
      state.items.map((item) =>{
        if(item.id === action.payload){
          item.qty = item.qty - 1;
          tmp.push(item)
        }else{
          tmp.push(item)
        }
      })
      state.items = tmp;
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

