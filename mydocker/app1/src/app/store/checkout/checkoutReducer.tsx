import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';

interface Item{
    name:string,
    price:number
}
interface TermsConditions{
  name:string,
  selected: boolean
}
interface CustomerInfo{
  email:string;
}
interface Address{
  addr:string
}
interface CheckoutState {
  items: Item[],
  customerInfo:CustomerInfo,
  addresses:Address[]
  termsConditions: TermsConditions[] 
}
const customerInfo = () => {email:''}

const initialState:CheckoutState ={
  items: [],
  customerInfo: {email:''},
  addresses: [],
  termsConditions:[{name:'billing',selected:false},{name:'legalage',selected:false},{name:'notify',selected:false},{name:'agree',selected:false}]
}
const initialState1 = {
  //items: [{ 'id': 1, 'price': 200, 'key': 1 }, { 'id': 2, 'price': 300, 'key': 2 }],
  items: [],
  totalPrice: 0,
  inCart: 0,
  customer: [],
  addresses: [],
  payment: [],
  //term_condition:[]
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updateTermsConditions: (state,action:PayloadAction<TermsConditions>)=>{
          const updatedArr = [...state.termsConditions]
          const term = updatedArr.find(
            (obj) => obj.name === action.payload.name
          )
          if (term) {
            term.selected = action.payload.selected
          }
        },
        getTermsConditions:(state,action:PayloadAction<TermsConditions>)=>{
          const updatedArr = [...state.termsConditions]
          const term = updatedArr.find(
            (obj) => obj.name === action.payload.name
          )
        },
        proceed: (state,action) => {

        },
        clearCart: (state) => {

        }
    }
})

export const selectAllTermsConditions = (state:RootState) => state.checkout.termsConditions;

// Memoized selector using createSelector from Redux Toolkit()
// It only recalculates when entities change
export const selectTermsConditionsByName = createSelector(
    [selectAllTermsConditions,(state,name) => name],
    (termsConditions,name) =>termsConditions.filter(item => item.name === name)
);
//actions
export const { updateTermsConditions, getTermsConditions} = checkoutSlice.actions;

export default checkoutSlice.reducer;