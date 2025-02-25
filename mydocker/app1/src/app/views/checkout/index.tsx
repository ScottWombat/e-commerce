import React,{useState,useEffect,useRef} from 'react';
import * as styles from './index.module.css';
import * as styles1 from './terms_conditions.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {updateCart,updatePayment,updateCustomerInfo,updateTermsConditions} from '../../store/checkout/checkoutReducer'
import { selectAllItems} from '../../store/cart/cartReducer';
import {selectTermsConditionsByName} from 'app/store/checkout/checkoutReducer';
import { allCountries} from 'app/store/countries/countriesReducer';
import {increase,decrease} from 'app/store/counter';

import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,DeliveryAddress, DeliverySection,DeliveryDetails,PaymentIcons,PaymentSection,PaymentDetails} from './checkout.styled';
import { CreditCardSection,PaymentDetailsHeader,PaypalSection,AfterPaySection,PaypalContent,PromoCodeWrapper,Credit,PayPal,AfterPay } from './checkout.styled';
import {Button,Address,ProductList,ProductRow,ProductDetails,PromoCodeMessage,ErrorMessage,InputMessage,CreditCardContentWrapper} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label,ButtonWrapper,AddressButtonWrapper,DeliveryButtonWrapper} from './input.styled '
import { fieldValidation,emailValidation,numberValidation,mobileValidation} from 'app/utils/form_validation';
//import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';


import {NoCard,CreditExpiryDate,PromoCode,White_Paypal,Color_Afterpay,Color_Paypal,Color_Master,Color_Visa,Color_Amex,MasterIcon,VisaIcon,AmexIcon,PaypalIcon,AfterpayIcon,SSL} from 'app/svg/payment_icons';
import CreditCardCvc from 'app/components/credit_card_cvc';
import CreditCardContent from 'app/components/credit_card';
import {State,InitialiseInputState,InitialiseHeightState,HeightState,OpenState,InitializeOpenState,BGImage, BorderBottom,HighState,InitialiseHighState} from './input_interface';
import {CreditCardState,InitialiseCreditCardState} from './interface_creditcard'

//import {Styled} from './checkbox'
import TermConditions from 'app/components/term_and_conditions';
//import {Styled,OptionWrapper} from 'app/components/term_and_conditions';
import { MessageBox } from 'app/components/message';
import {selectCount} from 'app/store/counter';

import { validate_order } from 'app/model/validate';

const CheckoutPage = (props) => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector(selectCount);
    const countrylist = useAppSelector(allCountries)
    let legalage =  useAppSelector(state => selectTermsConditionsByName(state,'legalage'))
    const [legalAgeSelected,setLegalAgeSected] = useState(legalage[0].selected)
    const emailInputRef = useRef(null);
    const firstnameInputRef = useRef(null);
    const lastnameInputRef = useRef(null);
    const legalageCheckboxRef = useRef(null)
    const agreeCheckboxRef = useRef(null)
    
    const items = useAppSelector(state => selectAllItems(state))
    const [showPaymentIcons,setShowPaymentIcons] = useState('flex');
    
    const [buttonName,setButtonName] = useState('NEXT')   
    const [next,setNext] = useState(false);
    
    const [placeOrder,setPlaceOrder] = useState(false);
    const [creditValid,setCreditValid] = useState(true);
    const [creditCardMessage,setCreditCardMessage] = useState([])
    const [checkboxBorder,setCheckboxBorder] =useState("1px solid #000")
    const [creditCard,setCreditCard] = useState<CreditCardState>(InitialiseCreditCardState);
    const [inputState2 ,setInputState2] =useState<State>(InitialiseInputState);
    const [heightState,setHeightState] = useState<HeightState>(InitialiseHeightState);
    const [highState,setHighState] = useState<HighState>(InitialiseHighState)
    const [openState,setOpenState] = useState<OpenState>(InitializeOpenState);
    const [showLegalMessage,setShowLegalMessage] = useState(false);
    const [showAgreeMessage,setShowAgreeMessage] = useState(false)
    const [unchecked,setUnchecked] = useState(0);
    const [onUnChecked,setOnUnChecked] = useState(false);
    const [firstTime,setFirstTime] = useState(true)
    const [emailState, setEmailState] = useState({
        icon:'empty.png',value:'',error:null
    });
    
    const [inputState1,setInputState1] = useState({
        promo_code:{value: ''}
    })

    const [firstNameState, setfirstNameState] = useState({
        icon:'crossmark.png',value:'',error:null
    });
    const [lastNameState, setLastNameState] = useState({
        icon:'empty.png',value:'',error:null
    });
    const [inputState, setInputState] = useState([
        { id: 'email',icon:'crossmark.png',value:'email',error:null},
        { id: 'firstName',icon:'crossmark.png',value:'first name',error:null}
    ])

    useEffect(() => {
        setUnchecked(unchecked+1);
    },[onUnChecked,setOnUnChecked])

    useEffect(() => {
      
    
    },[inputState2,highState,showAgreeMessage,showLegalMessage]);
    //useEffect(() => {

   // },[heightState])
   useEffect (()=>{
   
    dispatch(updateCart({items:items}))
   },[items]);

    useEffect(() => {
        //console.log('creditCarf')
       //console.log(creditCard)
    },[creditCard]);
  
    const updateState = (newState) =>{
        setTimeout(() => {
            setEmailState({...emailState,icon: 'crossmark.png',error:null})
          }, 2000);
    }

    
    const onNextClickToDelivery = (e) =>{
        let addr = highState.address.height.slice(0,-2) 

        let address = parseInt(addr)-80;
        let str_addr= address+'px';
        
        setHighState((prev_state) =>({
            ...prev_state,
            address: {height: str_addr},
            //delivery_address: {height: '1060px'},
            delivery: {height:'220px'},
            delivery_section: {height: '80px'},
            address_button_wrapper: {height:'0px'},
            delivery_button_wrapper: {height:'50px'}
        }));
        /*
        setHeightState((prev_state) =>({
            ...prev_state,
            delivery: {height:'250px'},
            delivery_section: {height: '90px'},
            address_button_wrapper: {height:'0px'}
        }));\
        */
        
    }
    const onNextClickToPayment = (e) =>{
        setHighState((prev_state) =>({
            ...prev_state,
            payment: {height: '350px'},
            payment_section: {height:'280px'},
            payment_icons:{height:'0px'},
            delivery_button_wrapper:{height:'0px'},
            delivery:{height:'165px'}

        }));
 
    }
    const onCreditCardSectionClick = (e) =>{
        if(openState.paypal.isOpen){
            setOpenState((prev_state)=>({
                ...prev_state,
                paypal:{isOpen:false}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                paypal_section: {height: '40px'},
                payment: {height:'350px'},
                
            }));
        }
        if(openState.after_pay.isOpen){
            //setPaymentHeight('350px')
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'350px'},
                afterpay_section: {height: '40px'},
                
            }));
            setOpenState((prev1_state)=>({
                ...prev1_state,
                after_pay:{isOpen:false}
            }));
        }
        if(openState.credit_card.isOpen){
            //setOpenCreditcardSection(false);
            setOpenState((prev1_state)=>({
                ...prev1_state,
                credit_card:{isOpen:false}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'350px'},
                creditcard_section: {height: '40px'},
                
            }));
        }else{
            //setOpenCreditcardSection(true); 
            setOpenState((prev_state)=>({
                ...prev_state,
                credit_card:{isOpen:true}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                creditcard_section: {height: '250px'},
                payment:{height:'650px'}
                
            }));

        }
          
        
    }
    const onPaypalSectionClick = (e) =>{
        //setOpenPaypalSection(true)
        //console.log("ooooo")
        if(openState.credit_card.isOpen){
            //setCreditCardSectionHeight('40px');
            //setPaymentHeight('350px')
            setOpenState((prev_state)=>({
                ...prev_state,
                credit_card:{isOpen:false}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                creditcard_section: {height: '40px'},
             //   payment: {height:'350px'},
                
            }));
        }
        if (openState.after_pay.isOpen){
           // setPaymentHeight('350px')
           setOpenState((prev_state)=>({
            ...prev_state,
            after_pay:{isOpen:false}
        }));
            setHighState((prev_state) =>({
                ...prev_state,
                afterpay_section: {height: '40px'},
             //   payment: {height:'350px'},
                
            }));
        }
        
        if(openState.paypal.isOpen){
           
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'350px'},
                paypal_section:  {height: '40px'}
                
            }));
            setOpenState((prev_state)=>({
                ...prev_state,
                paypal:{isOpen:false}
            }));
        }else{
            setOpenState((prev_state)=>({
                ...prev_state,
                paypal:{isOpen:true}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'600px'},
                paypal_section:  {height: '100px'}

                
            }));
        }
        
    }   
    const onAfterPaySectionClick = (e)=>{
        dispatch(updatePayment({type:'after_pay'}));
        if(openState.credit_card.isOpen){
            setOpenState((prev_state)=>({
                ...prev_state,
                credit_card:{isOpen:false}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                creditcard_section: {height: '40px'},
             //   payment: {height:'350px'},
                
            }));
        }
        if(openState.paypal.isOpen){
            setOpenState((prev_state)=>({
                ...prev_state,
                paypal:{isOpen:false}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                paypal_section: {height: '40px'},
                
            }));
            
        }
        if(openState.after_pay.isOpen){
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'350px'},
                afterpay_section:  {height: '40px'}
                
            }));
            setOpenState((prev_state)=>({
                ...prev_state,
                after_pay:{isOpen:false}
            }));
    
        }else{
            setOpenState((prev_state)=>({
                ...prev_state,
                after_pay:{isOpen:true}
            }));
            setHighState((prev_state) =>({
                ...prev_state,
                payment: {height:'450px'},
                afterpay_section:  {height: '100px'}
                
            }));
        }
        
    }
    
    const promoCodeDivOnClick = () =>{
        //setPromocodeHeight('120px')
        setHeightState((prev_state) =>({
            ...prev_state,
            promo_code: {height: '120px'}
        }));
    }

    /*** Email Input Event */

    const inputOnClick =(e) =>{
        const value = e.target.value
        switch(e.target.name){
            case "email":{
                emailInputRef.current.focus();
                break;
            }
            case "firstname":{
                firstnameInputRef.current.focus();
                break;
            }
            default:{
                break;
            }
        }
        
    }

    const inputOnChange = (e) =>{
        setInputState2((prev_state)=>({
            ...prev_state,
            [e.target.name]:{...prev_state[e.target.name],value:e.target.value}
        }));
        console.log(inputState2)
    }

    const inputOnBlur = (e) =>{
        let ret = null;
        if(e.target.name==='email'){
            ret = emailValidation(inputState2[e.target.name].value);
        }else if(e.target.name==='mobile'){
            ret = mobileValidation(e.targetname,inputState2[e.target.name].value)
        }else if (e.target.name==='country'){
            //alert(e.target.value)
            let exist = dataListValidation(e.target.value);

            if(exist){
                ret=null;
            }else{
                ret="Country is requied *"
            }
        }else if (e.target.name==='company'){
            if(e.target.value===''){
                ret=null;
            //}else{
            //    ret = fieldValidation(e.target.name,inputState2[e.target.name].value);
            }
        }else if (e.target.name==='streetno' || e.target.name==='postcode'){
            ret = numberValidation(e.target.name,inputState2[e.target.name].value);
        }else{
            ret = fieldValidation(e.target.name,inputState2[e.target.name].value);
        }
        if(ret===null){
            dispatch(updateCustomerInfo({name:e.target.name,value:e.target.value}))
            let bgImage=null;
            let borderBottom=null;
            if(e.target.name==='company' && e.target.value===''){
                bgImage =BGImage.EMPTY;
                borderBottom=BorderBottom.GREY;
            }else{
                bgImage =BGImage.GREEN;
                borderBottom=BorderBottom.GREEN;
            }
            setInputState2((prev_state) =>({
                ...prev_state,
                [e.target.name]:{...prev_state[e.target.name],bg_img:bgImage,show_message:true,show_err_message:false,border_bottom:borderBottom}
            }));
            setHighState((prev_state) =>({
                    ...prev_state,
                    address: {height: '1210px'},
                    delivery_address: {height: '1090px'},
                    address_button_wrapper:{height:'50px'}
            }));
        }else{
            setInputState2((prev_state) =>({
                ...prev_state,
                [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.RED,show_message:false,show_err_message:true,border_bottom:BorderBottom.RED,err_message:ret}
            }));
        }
        
    }

    const inputOnKeyDown = (e) => {
        let ret = null;
        if(e.target.name==='email'){
            ret = emailValidation(inputState2[e.target.name].value);
        }else if (e.target.name==='company'){
            if(e.target.value===''){
                ret=null;
            }else{
                ret = fieldValidation(e.targetname,inputState2[e.target.name].value);
            }
        } else{
            ret = fieldValidation(e.targetname,inputState2[e.target.name].value);
            
        }
        
        if(e.keyCode === 13 || e.keyCode === 9){
            //let ret = emailValidation(inputState2.email.value);
            if(ret===null){
                let bgImage=null;
                let borderBottom=null;
                if(e.target.name==='company'){
                    bgImage =BGImage.EMPTY;
                    borderBottom=BorderBottom.GREY;
                }else{
                    bgImage =BGImage.GREEN;
                    borderBottom=BorderBottom.GREEN;
                }
                    setInputState2((prev_state) =>({
                    ...prev_state,
                    [e.target.name]:{...prev_state[e.target.name],bg_img:bgImage,show_err_message:false,border_bottom:borderBottom}
                }));
                
            }else{
                setInputState2((prev_state) =>({
                    ...prev_state,
                    [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.RED,show_err_message:true,border_bottom:BorderBottom.RED,err_message:ret}
                }));
            }
        }
    }
    
    /*** Promo Code Input Event ***/
    const promoCodeOnBlur = (e) =>{
       let img = e.target.value==''?'./assets/images/black_cross.png':'';
       setInputState2((prev_state) =>({
            ...prev_state,
            email:{...prev_state.email,has_error:true,bg_img:BGImage.RED}
           }));
    }
    const promoCodeOnClick = () =>{
        //alert("D")
        //setHeight({...height,promoCodeMessage:'0px',promoCodeHeight:'120px'});

        setInputState2((prev_state) =>({
                    ...prev_state,
                    promo_code: {...prev_state.promo_code,bg_image: ''}
        }));
    }
    const promoCodeInputOnClick = (e) =>{

    }
    const promoCodeOnChange = (e) =>{
        setInputState2((prev_state) =>({
            ...prev_state,
            promo_code: {...prev_state.promo_code,value: e.target.value}
        }));
    }
    /** Place Order */
    const onClickPlaceOrder = ()=>{
        //console.log("openState");
        //console.log(openState)
        let valid =validateCreditCard();
        //console.log(valid)
        if(valid){
            //console.log("Credit cart");
            //console.log(creditCard)
            //if(openState.credit_card.isOpen){
            dispatch(updatePayment({type:'creditcard',name:creditCard.name.value,number:creditCard.number.value,expiry:creditCard.expiry.value,cvc:creditCard.cvc.value}))
            //}else if (openState.paypal.isOpen){
            //    dispatch(updatePayment({type:'paypal'}));
           // }else{
            //    dispatch(updatePayment({type:'after_pay'}));
            //}
            setCreditValid(valid);
        }

        // const terms =  useAppSelector(state => selectTermsConditionsByName(state,'billing'))
        //console.log("DD");
        //console.log(legalAgeSelected)
        //setCheckboxBorder("2px solid #ff0000")   
        //console.log("place order")
        //console.log(inputState2)
        const data={
            customerInfo:{firstName:'revit'}
        }
        let errors = validate_order(data);
        console.log(errors)

    }

    const validateCreditCard=()=>{
        let validCreditCard=true;
        let creditCardMessage=[];
        let height=260;
        let paymentHeight:650;
        if(creditCard.name.value===''){
            setCreditCard((prev_state)=>({
                ...prev_state,
                name:{...prev_state.name,showMessage:true,height:'20px'}
            }));
            validCreditCard=false;
            //setCreditInvalid(creditInvalid+1);
            height += 20;
            creditCardMessage.push(creditCard.name.message)
        }
        if(creditCard.number.value===''){
            setCreditCard((prev_state)=>({
                ...prev_state,
                number:{...prev_state.number,showMessage:true,height:'20px'}
            }));
            validCreditCard=false;
            //setCreditInvalid(creditInvalid+1);
            height += 20;
            creditCardMessage.push(creditCard.number.message)
        }
        
        if(creditCard.expiry.value===''){
            setCreditCard((prev_state)=>({
                ...prev_state,
                expiry:{...prev_state.expiry,showMessage:true,height:'20px'}
            }));
            validCreditCard=false;
            //setCreditInvalid(creditInvalid+1);
            height += 20;
            creditCardMessage.push(creditCard.expiry.message)
        }

        if(creditCard.cvc.value===''){
            setCreditCard((prev_state)=>({
                ...prev_state,
                cvc:{...prev_state.cvc,showMessage:true,height:'20px'}
            }));
            validCreditCard=false;
            //setCreditInvalid(creditInvalid+1);
            height += 20;
            creditCardMessage.push(creditCard.cvc.message)
        }
        setCreditCardMessage(creditCardMessage);
        let heightString = height+"px"
        let temp = height + paymentHeight;
        let paymentHeightString  = temp+"px";
        setHeightState((prev_state) =>({
            ...prev_state,
            creditcard_section: {height: heightString},
            payment:{height: '890px'}
            
        }));
       // if(!inputState2.agree.checked || !inputState2.consent.checked){
        //    validCreditCard= false;
        //}
        return validCreditCard;
        
    }
    const onClickRedirecToPaypal = ()=>{
        dispatch(updatePayment({type:'paypal'}));
    }
    const onClickApplyPromoCode = () =>{

    }
    /* Datalist validation */
    const dataListValidation = (value)=>{
        return countrylist.includes(value)
    }

    const checkBoxOnClick =(e)=>{
        
        dispatch(updateTermsConditions({name:e.target.name,selected:e.target.checked}))
       
        setInputState2((prev_state) =>({
            ...prev_state,
               [name]:{...prev_state[name],
               //show_message: showMessage,
               value:e.target.checked
               }
        }));
       let name = e.target.name;
       let HEIGHT= "1210px";
       let DELIVERY_HEIGHT="1090px"
       let legalMessage = showLegalMessage;
       let agreeMessage = showAgreeMessage;
       if(name==='legalage'){
            legalMessage = (e.target.checked===true)?false:true;
       }
       if(name==='agree'){
            agreeMessage =(e.target.checked===true)?false:true;
       }
       if(legalMessage){
            if(agreeMessage){
                HEIGHT= "1270px";
                DELIVERY_HEIGHT="1170px"
            }else{
                HEIGHT= "1240px";
                DELIVERY_HEIGHT="1120px"
            }
           
       }
       
       if(agreeMessage){
            if(agreeMessage){
                HEIGHT= "1270px";
                DELIVERY_HEIGHT="1150px"
            }else{
                HEIGHT= "1240px";
                DELIVERY_HEIGHT="1120px"
            }
             
       }
       /*
       if(legalMessage && agreeMessage){
            HEIGHT= "1300px";
            DELIVERY_HEIGHT="1180px"
       }
       */

       setShowLegalMessage(legalMessage)
       setShowAgreeMessage(agreeMessage)
       /*
        if (showLegalMessage && !showAgreeMessage){
            alert("JJ")
            setHighState((prev_state) =>({
                ...prev_state,
                address: {height: "1250px"},
                delivery_address: {height: "1150px"}
                
            }));
        }
        if ( showAgreeMessage && !showLegalMessage ){
            alert("TT")
            setHighState((prev_state) =>({
                ...prev_state,
                address: {height: "1250px"},
                delivery_address: {height: "1150px"}
                
            }));
        }
        */
        /*
        if(legalageCheckboxRef.current.checked && !agreeCheckboxRef.current.checked){
            
            //addrHigh="1190px";
            //delAddrHigh="1060px";
            setHighState((prev_state) =>({
                ...prev_state,
                address: {height: "1210px"},
                delivery_address: {height: "1090px"},
                show_message:false
            }));
        }

        */
        
        
       
        setHighState((prev_state) =>({
            ...prev_state,
            address: {height: HEIGHT},
            delivery_address: {height: DELIVERY_HEIGHT},
        }));
    

    }
    
    return (
        <Container>
            <Center>
            <Header>
                <Company><Logo/></Company>
                <Bag><ShoppingBagIcon width={'50'} height={'50'}/></Bag>
            </Header>
            <Title>Checkout</Title>
            <Description>(3 items)$288.00</Description>
            <Content>
                <ContentLeft>
                  <form autoComplete='off'>
                  <Contact>
                  <div>CONTACT</div>
                  <Wrapper1>
                        <Input ref={emailInputRef} 
                        id={inputState2.email.id}
                        name={inputState2.email.name}
                        border_bottom={inputState2.email.border_bottom} 
                        img_position={inputState2.email.bg_img_pos}
                        width={inputState2.email.width} 
                        autoComplete={inputState2.email.id}
                        onClick={(e) =>inputOnClick(e)} 
                        onChange={(e) =>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e)}
                        onBlur={(e)=>inputOnBlur(e)} 
                        //defaultValue={inputState2.email.value} 
                        value={'revit@gmail.com'}
                        placeholder="" 
                        background={inputState2.email.bg_img}/>
                        <Label>Email *</Label>
                    </Wrapper1>
                    {inputState2.email.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'20px'}>
                            {inputState2.email.err_message}
                        </ErrorMessage>
                    }
                  </Contact>
                  <Address height={highState.address.height}>
                    <div>ADDRESS</div>
                    <DeliveryAddress height={highState.delivery_address.height}>
                    <div>Delivery Address</div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                        <Input ref={firstnameInputRef}
                        id={inputState2.firstname.id} 
                        name={inputState2.firstname.name}
                        border_bottom={inputState2.firstname.border_bottom} 
                        img_position={inputState2.firstname.bg_img_pos} 
                        width={inputState2.firstname.width} 
                        autoComplete={inputState2.firstname.id} 
                        onClick={(e) =>inputOnClick(e)} 
                        onChange={(e)=>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e)} 
                        defaultValue={inputState2.firstname.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" 
                        background={inputState2.firstname.bg_img}/>
                       <Label>First Name *</Label>
                       {inputState2.firstname.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.firstname.err_message}
                        </ErrorMessage>
                       }
                    </Wrapper1>
                    <Wrapper1>
                        <Input ref={lastnameInputRef}
                        id={inputState2.lastname.id} 
                        name={inputState2.lastname.name}
                        border_bottom={inputState2.lastname.border_bottom}
                        img_position={inputState2.lastname.bg_img_pos} 
                        width={inputState2.lastname.width} 
                        autoComplete={inputState2.lastname.id} 
                        onClick={(e) =>inputOnClick(e)} 
                        onChange={(e)=>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e)} 
                        defaultValue={inputState2.lastname.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" 
                        background={inputState2.lastname.bg_img}/>
                       <Label>Last Name *</Label>
                       {inputState2.firstname.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.lastname.err_message}
                        </ErrorMessage>
                       }
                    </Wrapper1>
                    
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input 
                        id={inputState2.company.id}
                        name={inputState2.company.name}
                        border_bottom={inputState2.company.border_bottom}
                        img_position={inputState2.company.bg_img_pos}  
                        width={inputState2.company.width}  
                        autoComplete={inputState2.company.id} 
                        onChange={(e) =>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e)} 
                        defaultValue={inputState2.company.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" 
                        background={inputState2.company.bg_img}/>
                    <Label>Company Name</Label>
               
                    {inputState2.company.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.company.err_message}
                        </ErrorMessage>
                    }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input 
                        id={inputState2.unitno.id}
                        name={inputState2.unitno.name}
                        img_position={inputState2.unitno.bg_img_pos}  
                        width={inputState2.unitno.width} 
                        autoComplete={inputState2.unitno.id} 
                        onChange={(e) =>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e) } 
                        defaultValue={inputState2.unitno.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" />
                    <Label>Lvt, Apt or Unit No.</Label>
                    </Wrapper1>
                    <Wrapper1>
                    <Input 
                         id={inputState2.streetno.id}
                         name={inputState2.streetno.name}
                         border_bottom={inputState2.streetno.border_bottom} 
                         img_position={inputState2.streetno.bg_img_pos}  
                         width={inputState2.streetno.width} 
                         autoComplete={inputState2.streetno.id} 
                         onChange={(e) =>inputOnChange(e)} 
                         onKeyDown={(e)=>inputOnKeyDown(e) } 
                         defaultValue={inputState2.streetno.value} 
                         onBlur={(e) =>inputOnBlur(e)} 
                         placeholder="" 
                         background={inputState2.streetno.bg_img}/>
                        <Label>Street no *</Label>
                        {inputState2.streetno.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.streetno.err_message}
                        </ErrorMessage>
                         }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input 
                        id={inputState2.streetname.id}
                        name={inputState2.streetname.name}
                        border_bottom={inputState2.streetname.border_bottom} 
                        img_position={inputState2.streetname.bg_img_pos}  
                        width={inputState2.streetname.width} 
                        autoComplete={inputState2.streetname.id} 
                        onChange={(e) =>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e) } 
                        defaultValue={inputState2.streetname.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" 
                        background={inputState2.streetname.bg_img}/>
                    <Label>Street Name *</Label>
                    {inputState2.streetname.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.streetname.err_message}
                        </ErrorMessage>
                    }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input 
                        id={inputState2.suburb.id}
                        name={inputState2.suburb.name}
                        border_bottom={inputState2.suburb.border_bottom}
                        img_position={inputState2.suburb.bg_img_pos}  
                        width={inputState2.suburb.width}  
                        autoComplete={inputState2.suburb.id} 
                        onChange={(e) =>inputOnChange(e)} 
                        onKeyDown={(e)=>inputOnKeyDown(e)} 
                        defaultValue={inputState2.suburb.value} 
                        onBlur={(e) =>inputOnBlur(e)} 
                        placeholder="" 
                        background={inputState2.suburb.bg_img}/>
                    <Label>Suburb *</Label>
                    {inputState2.suburb.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.suburb.err_message}
                        </ErrorMessage>
                    }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input 
                         id={inputState2.state.id}
                         name={inputState2.state.name}
                         border_bottom={inputState2.state.border_bottom} 
                         img_position={inputState2.state.bg_img_pos}  
                         width={inputState2.state.width} 
                         autoComplete={inputState2.state.id} 
                         onChange={(e) =>inputOnChange(e)} 
                         onKeyDown={(e)=>inputOnKeyDown(e) } 
                         defaultValue={inputState2.state.value} 
                         onBlur={(e) =>inputOnBlur(e)} 
                         placeholder="" 
                         background={inputState2.state.bg_img}/>
                        <Label>State *</Label>
                        {inputState2.state.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.state.err_message}
                        </ErrorMessage>
                         }
                    </Wrapper1>
                    <Wrapper1>
                    <Input 
                         id={inputState2.postcode.id}
                         name={inputState2.postcode.name}
                         border_bottom={inputState2.postcode.border_bottom} 
                         img_position={inputState2.postcode.bg_img_pos}  
                         width={inputState2.postcode.width} 
                         autoComplete={inputState2.postcode.id} 
                         onChange={(e) =>inputOnChange(e)} 
                         onKeyDown={(e)=>inputOnKeyDown(e) } 
                         defaultValue={inputState2.postcode.value} 
                         onBlur={(e) =>inputOnBlur(e)} 
                         placeholder="" 
                         background={inputState2.postcode.bg_img}/>
                        <Label>Postal Code *</Label>
                        {inputState2.postcode.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.postcode.err_message}
                        </ErrorMessage>
                         }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input list="countrydata"
                         id={inputState2.country.id}
                         name={inputState2.country.name}
                         border_bottom={inputState2.country.border_bottom} 
                         img_position={inputState2.country.bg_img_pos}  
                         width={inputState2.country.width} 
                         autoComplete={inputState2.country.id} 
                         onChange={(e) =>inputOnChange(e)} 
                         onKeyDown={(e)=>inputOnKeyDown(e) } 
                         onInput={(e) => inputOnBlur(e)}
                         defaultValue={inputState2.country.value} 
                         onBlur={(e) =>inputOnBlur(e)} 
                         placeholder="" 
                         background={inputState2.country.bg_img}/>
                        <Label>Country *</Label>
                        <datalist id="countrydata">
                        {countrylist.map(item =>
                            <option>{item}</option>
                        )}
                        </datalist>
                        {inputState2.country.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.country.err_message}
                        </ErrorMessage>
                         }
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                        <Input 
                         id={inputState2.mobile.id}
                         name={inputState2.mobile.name}
                         border_bottom={inputState2.mobile.border_bottom} 
                         img_position={inputState2.mobile.bg_img_pos}  
                         width={inputState2.mobile.width} 
                         autoComplete={inputState2.mobile.id} 
                         onChange={(e) =>inputOnChange(e)} 
                         onKeyDown={(e)=>inputOnKeyDown(e) } 
                         defaultValue={inputState2.mobile.value} 
                         onBlur={(e) =>inputOnBlur(e)} 
                         placeholder="" 
                         background={inputState2.mobile.bg_img}/>
                        <Label>Mobile Phone *</Label>
                     
                        {inputState2.mobile.show_err_message && 
                        <ErrorMessage height={'35px'} margin_top={'10px'}>
                             * Please enter Mobile value<br/>
                             eg. 0403872130 or 040-387-1223
                        </ErrorMessage>
                         }
                    </Wrapper1>
                  
                    </div>
                   <br/>
                    <div className={styles.checkbox_wrapper}>
                        <div className={styles1.wrapper}>
                            <div>
                            <input className={styles1.checkbox1} type="checkbox" id='billing' name='billing' onClick={checkBoxOnClick}/>
                            </div>
                            <div>My billing and delivery information are the same.</div>
                            <div>&nbsp;</div><div>&nbsp;</div>
                            <div>
                            <input value={inputState2.legalage.value} ref={legalageCheckboxRef} className={styles1.checkbox1} type="checkbox" id='legalage' name='legalage' onClick={checkBoxOnClick}/>
                            </div>
                            <div>I'm 18+ years old.</div>
                            <MessageBox show={showLegalMessage}/>
                            <div>
                            <input className={styles1.checkbox1} type="checkbox" id='notify' name='notify'/>
                            </div>
                            <div>I agree to receive news, promotions, information regarding adidas’ brand, products, activities and events, and any other marketing communications and materials by e-mail, sms, in-app notification and/or telephone from Adidas Australia Pty Ltd. and runtastic GmbH pursuant to the adidas Privacy Policy.HOW?</div>
                            <div>&nbsp;</div><div>&nbsp;</div>
                            <div>
                            <input value={inputState2.agree.value} ref={agreeCheckboxRef} className={styles1.checkbox1} type="checkbox" id='agree' name='agree' onClick={checkBoxOnClick}/>
                            </div>
                            <div>I understand and agree that in certain circumstances, my personal information may be transferred to other entities in the adidas Group and service providers that are located in countries that do not have comparable privacy safeguards to Australia.</div>
                            <MessageBox show={showAgreeMessage} />
                        </div>
                    </div>
                    </DeliveryAddress>
                   
                    <AddressButtonWrapper height={highState.address_button_wrapper.height}>
                        <Button height={heightState.next_button.height}>
                        <a className={styles.a_button} onClick={onNextClickToDelivery}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                    </AddressButtonWrapper>
                  
                  </Address>
                 
                  <Delivery height={highState.delivery.height}>
                    <div>DELIVERY OPTIONS</div>
                    <DeliverySection height={highState.delivery_section.height}>
                        <DeliveryDetails>
                        <div className={styles.delivery_details}>
                        <div>Shipping</div>
                        <div>Free</div>
                        <div>Australia Post (4-7 business days)</div>
                        </div>
                        </DeliveryDetails>
                    </DeliverySection>
                    <DeliveryButtonWrapper height={highState.delivery_button_wrapper.height} >
                        <Button height={heightState.next_button.height}>
                        <a className={styles.a_button} onClick={onNextClickToPayment}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                    </DeliveryButtonWrapper>
                  </Delivery>
                  <Payment height={highState.payment.height}>
                    <div>PAYMENT</div>
                    <PaymentIcons height={highState.payment_icons.height} show={showPaymentIcons}><AmexIcon/><MasterIcon/><VisaIcon/><PaypalIcon/><AfterpayIcon/></PaymentIcons>
                    <PaymentDetailsHeader>
                          <div className={styles.payment_header}>Payments are SSL encrypted so that your credit card and payment details stay safe.</div><div className={styles.ssl}><SSL/></div>
                    </PaymentDetailsHeader>
                    <PaymentSection height={highState.payment_section.height}>
                          <PaymentDetails>
                        
                         <CreditCardSection height={highState.creditcard_section.height} isOpen={openState.credit_card.isOpen}>
                            <a className={styles.b_button} onClick={onCreditCardSectionClick}>
                            <span className={styles.button_name}>Debit/Credit Card</span>
                            <span className={styles.s_credit_card}>
                                <Color_Visa/>
                                <Color_Amex/>
                                <Color_Master/>
                            </span>
                            </a>
                          
                            <CreditCardContentWrapper height={highState.creditcard_wrapper.height}>
                                <CreditCardContent setCreditCard={setCreditCard} height={highState.creditcard_content.height}/>
                                <ul className={styles.ulMessage}>
                                {creditCardMessage.map(item=>(
                                    <li>{item}</li>
                                ))}
                                </ul>
                            </CreditCardContentWrapper>
                          
                        </CreditCardSection>
                      
                        <PaypalSection height={highState.paypal_section.height} isOpen={openState.paypal.isOpen}>
                                <a className={styles.b_button} onClick={onPaypalSectionClick}>
                                <span className={styles.button_name}>PayPal</span>
                                <span className={styles.s_credit_card}>
                                <Color_Paypal/>
                               </span>
                               </a>
                               <div className={styles.payment_content}>
                                 <PaypalContent>You will be redirected to PayPal, where you can pay and complete your order.</PaypalContent>
                                </div>
                        </PaypalSection>

                        <AfterPaySection height={highState.afterpay_section.height} isOpen={openState.after_pay.isOpen}>
                                <a className={styles.b_button} onClick={onAfterPaySectionClick}>
                                <span className={styles.button_name}>AfterPay</span>
                                <span className={styles.s_credit_card}>
                                <Color_Afterpay/>
                               </span>
                               </a>
                               <div className={styles.afterpay_content}>
                               Pay in 4 easy instalments. You'll be redirected to the Afterpay website.
                               </div>
                        </AfterPaySection>
                         <br/>
                        {(openState.credit_card.isOpen || openState.after_pay.isOpen ) &&
                         <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onClickPlaceOrder}>
                        <span className={styles.button_name}>Place Order</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                        }
                        {openState.paypal.isOpen &&
                        <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onClickRedirecToPaypal}>
                        <span className={styles.white_paypal}><White_Paypal/></span>
                        </a>
                        </Button>}
                        </PaymentDetails>
                    </PaymentSection>
                  </Payment>
                  </form>
                </ContentLeft>
                <ContentRight>
                    <div className={styles.right_header_content}>
                    <div className={styles.content_left}>YOUR CARD</div>
                    <div className={styles.content_right}>EDIT</div>
                    </div>
                    <div className={styles.right_content}>
                    <div className={styles.content_left}>4 items</div>
                    <div className={styles.content_right}>$575.00</div>
                    </div>
                    <div className={styles.right_content}>
                    <div className={styles.content_left}>Original Price</div>
                    <div className={styles.content_right}>$620.00</div>
                    </div>
                    <div className={styles.right_content}>
                    <div className={styles.content_left}>Delivery</div>
                    <div className={styles.content_right}>Free</div>
                    </div>
                    <div className={styles.right_content}>
                    <div className={styles.content_left}>On Sale</div>
                    <div className={styles.content_right}>-$45.00</div>
                    </div>
                    <div className={styles.right_content}>
                    <div className={styles.content_left}>Total</div>
                    <div className={styles.content_right}>$575.00</div>
                    </div>
                    <div className={styles.gst}>(Inclusive of GST $52.00)</div>
                    <PromoCodeMessage height={heightState.promo_code_message.height}>Promo code not recognised. Please check and try again</PromoCodeMessage>
                    <PromoCodeWrapper height={heightState.promo_code.height}>
                        <div className={styles.promo_code} onClick={promoCodeDivOnClick}>
                            <PromoCode/>&nbsp;USE A PROMO CODE
                            <Wrapper1>   
                                <Input img_position={inputState2.promo_code.bg_img_pos} width={inputState2.promo_code.width} autoComplete={'promocode'} onClick={(e) =>promoCodeInputOnClick(e)} onChange={promoCodeOnChange} id="promo_code" value={inputState2.promo_code.value} onBlur={(e)=>promoCodeOnBlur(e)} placeholder="" background={inputState2.promo_code.bg_image}/>
                                <Label>Promo Code</Label>
                            </Wrapper1>
                            <Button height={'50px'}>
                                <a className={styles.c_button} onClick={onClickApplyPromoCode}>
                                <span className={styles.button_name}>APPLY</span>
                                <span className={styles.arrows}><RightArrow/></span>
                                </a>
                            </Button>
                        </div>
                    </PromoCodeWrapper>
                    <ProductList>
                    {items.map(p => (
                        <ProductRow>
                         <div>
                        <img width="80px" height="80px" src="./assets/images/img1.jpg" />
                        </div>
                        
                        <ProductDetails>
                            <div>{p.title}</div>
                            <div>${p.price}</div>
                            <div>{p.description}</div>
                        </ProductDetails>
                        </ProductRow>
                      ))}
                    </ProductList>
                </ContentRight>
            </Content>
            </Center>
        </Container>
    )
}
export default CheckoutPage;