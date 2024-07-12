import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import { addItemToCart, removeItemFromCart } from './cart-util';
const initialState = {
  //items: [{ 'id': 1, 'price': 200, 'key': 1 }, { 'id': 2, 'price': 300, 'key': 2 }],
  items: [],
  totalPrice: '0.0',
  inCart: 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = addItemToCart(state.items, action.payload);
     
      //console.log(action.payload.price * action.payload.qty)
      let totalPrice = Number(state.totalPrice) + (action.payload.price * action.payload.qty)
      state.totalPrice = totalPrice.toFixed(2)
      state.inCart = state.inCart + action.payload.qty;
    },
    removeItem: (state, action) => {
      state.items = removeItemFromCart(state.items, action.payload)
      //state.totalPrice = state.totalPrice - (action.payload.price * action.payload.quantity);
      state.inCart = state.inCart - 1;
    },
    clearCart: (state) => initialState
  },
})

//store selectors:
export const selectAllItems = (state) => state.cart.items;
export const getAmountInCart = (state) => state.cart.inCart;
export const getTotalPrice = (state) => state.cart.totalPrice;


// Memoized selector using createSelector from Redux Toolkit
// It only recalculates when entities change
export const selectItemById = createSelector(
  [selectAllItems, (state, id) => id], 
  (items,id) => items.map(item => item.id === id)
);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const getCurrentCart = (state) => state.shopping_cart.cartItems;



export default cartSlice.reducer;

