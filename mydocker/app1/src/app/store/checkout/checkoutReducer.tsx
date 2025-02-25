import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '../index';

interface Item{
    _id: string,
    id:string,
    title:string,
    description:string,
    catalog:string,
    category:string,
    price:number,
    discount:number,
    rating:number,
    viewers:number,
    image_id:string,
    number_image:number,
    qty:number,
    total:number
}
interface TermsConditions{
  name:string,
  selected: boolean
}
interface CustomerInfo{
  email:string;
  firstname:string;
  lastname:string;
  company:string;
  unitno:string;
  streetno:string;
  streetname:string;
  suburb:string;
  state:string;
  postcode:string;
  country:string;
  mobile:string;
}
interface Address{
  addr:string
}
interface Payment{
  type?: string;
  name?: string;
  number?: string;
  expiry?:string;
  cvc?:string;
}
interface Cart{
  items:Item[],
  totalPrice:number,
  inCart:number,
  grandTotal:number,
  deliveryFee:number
}
interface CheckoutState {
  items: Item[],
  customerInfo:CustomerInfo,
  addresses:Address[]
  termsConditions: TermsConditions[],
  payment: Payment,
  cart:Cart,
  promoCode:string
}
const customerInfo = () => {email:''}

const initialState:CheckoutState ={
  items: [],
  cart:{totalPrice:0,inCart:0,grandTotal:0,deliveryFee:0,items:[]},
  customerInfo: {email:'',firstname:'',lastname:'',company:'',unitno:'',streetno:'',streetname:'',suburb:'',state:'',postcode:'',country:'',mobile:''},
  addresses: [],
  termsConditions:[{name:'billing',selected:false},{name:'legalage',selected:false},{name:'notify',selected:false},{name:'agree',selected:false}],
  payment: {},
  promoCode:''
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
      updateCart: (state,action)=>{
        let items = action.payload.items;
        let totalPrice = 0;
        let inCart=0;
        items.forEach(i =>{
          totalPrice += i.price;
          inCart +=i.qty;
        })
        state.cart.items = items;
        state.cart.inCart = inCart;
        state.cart.totalPrice = totalPrice;

      },
      updatePayment: (state,action) =>{
        state.payment= action.payload
      },
      updateCustomerInfo: (state,action)=>{
        //console.log(action.payload.name);
        //console.log(action.payload.value);
        state.customerInfo = {...state.customerInfo,[action.payload.name]: action.payload.value}
      },
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
export const { updateCart, updatePayment,updateCustomerInfo,updateTermsConditions, getTermsConditions} = checkoutSlice.actions;

export default checkoutSlice.reducer;