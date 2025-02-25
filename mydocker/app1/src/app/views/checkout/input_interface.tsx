import random_string from 'app/utils/random_string';

const RD_STR = random_string()
const EMAIL_ID= "email"+ RD_STR;
const FNAME_ID = "firstname" + RD_STR;
const LNAME_ID = "lastname" + RD_STR;
const COMPANY_ID = "company" + RD_STR;
const UNIT_ID = "unit"+RD_STR;
const STREETNO_ID = "streetno"+RD_STR;
const STREETNAME_ID = "streetname"+RD_STR;
const SUBURB_ID = "suburb"+RD_STR;
const STATE_ID = "state"+RD_STR;
const POSTCODE_ID = 'postal'+ RD_STR;
const COUNTRY_ID = 'country'+RD_STR;
const MOBILE_ID ='mobile'+RD_STR;
const BILLING_ID = 'billing'+ RD_STR;
const CONSENT_ID ='consent'+RD_STR;
const NOTIFY_ID ='notify'+RD_STR;
const AGREE_ID ='agree'+RD_STR;
/** Input state */
export enum BGImage {
    EMPTY="./assets/images/empty.png",
    GREEN="./assets/images/checkmark.png",
    RED="./assets/images/crossmark.png"
}
export enum BorderBottom{
    GREY="1px solid #ccc",
    GREEN="1px solid #7CFC00",
    RED="1px solid #FF0000"
}

interface Values{
    id?:string,
    name?:string,
    value?:string,
    height?:string,
    width?:string,
    bg_image?:string,
    bg_img_pos?:string,
    bg_img?:BGImage,
    border_bottom?:BorderBottom,
    has_error?:boolean,
    show_err_message?:boolean,
    err_message?:string,
    show_message?:boolean,
    input_message?:string,
    checked?:boolean,
    required?:boolean
}
interface CreditCardValues{
    name:string,
    number:string,
    valid:string,
    security_code:number;

}
interface CreditValues{
    value:any,
    message:string,
    showMessage:boolean
}
export interface CreditCardState{
    creditcard: CreditCardValues
}

export interface CreditState{
   name: CreditValues,
   number: CreditValues,
   expiry: CreditValues,
   cvc: CreditValues
}

export interface State {
    email: Values,
    firstname: Values,
    lastname: Values,
    company: Values,
    unitno: Values,
    streetno: Values,
    streetname: Values,
    suburb: Values,
    state: Values,
    postcode: Values,
    country: Values,
    mobile: Values,
    legalage: Values,
    agree: Values,
    promo_code: Values
}

const EMAIL_VALUE:Values ={
    id:EMAIL_ID,
    name:"email",
    value:'',
    bg_img_pos:'460px 10px',
    width:'490px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const FIRSTNAME_VALUE:Values ={
    id:FNAME_ID,
    name:'firstname',
    value:'',
    bg_img_pos:'215px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const LASTNAME_VALUE:Values ={
    id:LNAME_ID,
    name:'lastname',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const COMPANY_VALUE:Values ={
    id:COMPANY_ID,
    name:'company',
    value:'',
    bg_img_pos:'460px 10px',
    width:'490px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const UNITNO_VALUE:Values ={
    id:UNIT_ID,
    name:'unitno',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const STREETNO_VALUE:Values ={
    id:STREETNO_ID,
    name:'streetno',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const STREETNAME_VALUE:Values={
    id:STREETNAME_ID,
    name:'streetname',
    value:'',
    bg_img_pos:'460px 10px',
    width:'490px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:'',
    show_message:false,
    input_message:'E.g George St'
}
const SUBURB_VALUE:Values ={
    id: SUBURB_ID,
    name:'suburb',
    value:'',
    bg_img_pos:'460px 10px',
    width:'490px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const STATE_VALUE:Values ={
    id: STATE_ID,
    name:'state',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const POSTCODE_VALUE:Values ={
    id:POSTCODE_ID,
    name:'postcode',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const COUNTRY_VALUE:Values ={
    id:COUNTRY_ID,
    name:'country',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:''
}
const MOBILE_VALUE:Values ={
    id:MOBILE_ID,
    name:'mobile',
    value:'',
    bg_img_pos:'220px 10px',
    width:'240px',
    bg_img: BGImage.EMPTY,
    border_bottom: BorderBottom.GREY,
    has_error:false,
    show_err_message:false,
    err_message:'',
    show_message:false,
    input_message:'E.g 0403872130 or 040-387-2130'
}


const PROMO_CODE_VALUE:Values ={
    id:'promo_code',
    value:'',
    bg_img_pos:'380px 10px',
    width:'415px',
    bg_image:'./assets/images/black_cross.png',
    has_error:false,
    show_err_message:false
}

const LEGAL_AGE_VALUE:Values={
    id:'legalage',
    checked: false,
    show_message: false
}
const AGREE_VALUE:Values={
    id:'agree',
    checked: false,
    show_message: false
}

const CREDITCARD_VALUE:CreditCardValues ={
    name:'',
    number:'',
    valid:'',
    security_code:0
}

export const InitialiseInputState: State ={
    email:EMAIL_VALUE,
    firstname: FIRSTNAME_VALUE,
    lastname: LASTNAME_VALUE,
    company: COMPANY_VALUE,
    unitno: UNITNO_VALUE,
    streetno: STREETNO_VALUE,
    streetname: STREETNAME_VALUE,
    suburb: SUBURB_VALUE,
    state: STATE_VALUE,
    postcode: POSTCODE_VALUE,
    country: COUNTRY_VALUE,
    mobile: MOBILE_VALUE,
    legalage: LEGAL_AGE_VALUE,
    agree: AGREE_VALUE,
    promo_code:PROMO_CODE_VALUE
}

export const InitialiseCreditcardState:CreditCardState={
    creditcard:CREDITCARD_VALUE
}






/** Open State */
interface Open {
    isOpen:boolean
}

export interface OpenState{
    credit_card:Open;
    paypal: Open;
    after_pay: Open;
}

export const InitializeOpenState: OpenState ={
    credit_card:{isOpen:false},
    paypal:{isOpen:false},
    after_pay:{isOpen:false}
}


/** Height state */
interface HeightValue {
    height:string
}

interface High{
    height:string;
}

export interface HighState{
    address: High,
    delivery_address: High,
    address_button_wrapper: High,
    delivery: High,
    delivery_section: High,
    delivery_button_wrapper: High,
    payment: High,
    payment_section: High,
    payment_icons: High,
    creditcard_section: High,
    creditcard_wrapper: High,
    creditcard_content: High,
    paypal_section: High,
    afterpay_section: High
}

export const InitialiseHighState: HighState={
    address:{height:'50px'},
    delivery_address:{height:'0px'},
    address_button_wrapper:{height:'0px'},
    delivery: {height: '60px'},
    delivery_section: {height: '0px'},
    delivery_button_wrapper:{height:'0px'},
    payment: {height: '80px'},
    payment_section: {height: '0px'},
    payment_icons: {height: '30px'},
    creditcard_section: {height: '40px'},
    creditcard_wrapper: {height: '210px'},
    creditcard_content: {height: '200px'},
    paypal_section:{height:'40px'},
    afterpay_section:{height:'40px'}
}

export interface HeightState{
    payment: HeightValue,
    payment_icons: HeightValue,
    payment_section: HeightValue,
    payment_detials: HeightValue,
    delivery: HeightValue,
    delivery_address:HeightValue;
    delivery_section: HeightValue;
    address: HeightValue;
    creditcard_section: HeightValue;
    paypal_section:HeightValue;
    afterpay_section: HeightValue;
    promo_code_message: HeightValue;
    promo_code: HeightValue;
    address_button_wrapper: HeightValue;
    delivery_button_wrapper: HeightValue;
    next_button: HeightValue;
    error_message: HeightValue;
    input_message: HeightValue;
    creditcard_wrapper: HeightValue;
    creditcard_content: HeightValue;
}

export const InitialiseHeightState: HeightState ={
    payment:{height:'80px'},
    payment_icons:{height:'30px'},
    payment_section:{height:'0px'},
    payment_detials:{height:'0px'},
    delivery:{height:'60px'},
    delivery_address:{height:'0px'},
    delivery_section:{height:'0px'},
    address:{height:'60px'},
    creditcard_section:{height:'40px'},
    paypal_section:{height:'40px'},
    afterpay_section:{height:'40px'},
    promo_code_message:{height:'55px'},
    promo_code:{height:'50px'},
    address_button_wrapper: {height:'0px'},
    delivery_button_wrapper:{height:'50px'},
    next_button:{height:'50px'},
    error_message: {height:'25px'},
    input_message: {height:'30px'},
    creditcard_wrapper: {height:'210px'},
    creditcard_content: {height:'200px'}
}



