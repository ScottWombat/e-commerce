interface CreditCard{
    value:any,
    message:string,
    showMessage:boolean,
    height:string
}
export interface CreditCardState{
    name: CreditCard,
    number: CreditCard,
    expiry: CreditCard,
    cvc: CreditCard
 }
 const CREDIT_NAME_VALUE:CreditCard ={
    value:'',
    message:'Credit Card name is required *',
    showMessage:false,
    height:'0px'
}
const CREDIT_NUMBER_VALUE:CreditCard ={
    value:'',
    message:'Credit Card number is required *',
    showMessage:false,
    height:'0px'
}
const CREDIT_EXPIRY_DATE_VALUE:CreditCard ={
    value:'',
    message:'Credit Card expiry date is required *',
    showMessage:false,
    height:'0px'
}
const CREDIT_CVC_VALUE:CreditCard ={
    value:'',
    message:'Credit Card CVC security code is required *',
    showMessage:false,
    height:'0px'
}

export const InitialiseCreditCardState:CreditCardState={
    name:CREDIT_NAME_VALUE,
    number:CREDIT_NUMBER_VALUE,
    expiry:CREDIT_EXPIRY_DATE_VALUE,
    cvc:CREDIT_CVC_VALUE
}