interface Values{
    id?:string,
    value?:string,
    height?:string,
    width?:string,
    bg_image?:string,
    bg_img_pos?:string
}

export interface State {
    promo_code: Values
}
interface HeightValue {
    height:string
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
}

interface Open {
    isOpen:boolean
}

export interface OpenState{
    credit_card:Open;
    paypal: Open;
    after_pay: Open;
}


const PROMO_CODE_VALUE:Values ={
    id:'promo_code',
    value:'',
    bg_img_pos:'380px 10px',
    width:'415px',
    bg_image:'./assets/images/black_cross.png'
}

export const InitialiseInputState: State ={
    promo_code:PROMO_CODE_VALUE
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
    address_button_wrapper: {height:'50px'},
    delivery_button_wrapper:{height:'50px'},
    next_button:{height:'50px'}

}

export const InitializeOpenState: OpenState ={
    credit_card:{isOpen:false},
    paypal:{isOpen:false},
    after_pay:{isOpen:false}
}

