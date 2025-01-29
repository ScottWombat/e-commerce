import React,{useState,useEffect,useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as styles from './index.module.css';
import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,DeliveryAddress, DeliverySection,DeliveryDetails,PaymentIcons,PaymentSection,PaymentDetails} from './checkout.styled';
import { CreditCardSection,PaymentDetailsHeader,PaypalSection,AfterPaySection,PaypalContent,PromoCodeWrapper,Credit,PayPal,AfterPay } from './checkout.styled';
import {Button,Address,ProductList,ProductRow,ProductDetails,PromoCodeMessage,ErrorMessage,InputMessage} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label,ButtonWrapper,AddressButtonWrapper,DeliveryButtonWrapper} from './input.styled '
import { fieldValidation,emailValidation,numberValidation,mobileValidation} from 'app/utils/form_validation';
import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';
import { selectAllItems} from '../../store/cart/cartReducer'
import {NoCard,CreditExpiryDate,PromoCode,White_Paypal,Color_Afterpay,Color_Paypal,Color_Master,Color_Visa,Color_Amex,MasterIcon,VisaIcon,AmexIcon,PaypalIcon,AfterpayIcon,SSL} from 'app/svg/payment_icons';
import CreditCardCvc from 'app/components/credit_card_cvc';
import CreditCardContent from 'app/components/credit_card';
import {State,InitialiseInputState,CreditCardState,InitialiseHeightState,InitialiseCreditcardState,HeightState,OpenState,InitializeOpenState,BGImage, BorderBottom} from './input_interface';
import { allCountries} from 'app/store/countries/countriesReducer';
const CheckoutPage = (props) => {
    const countrylist = useAppSelector(allCountries)
    const emailInputRef = useRef(null);
    const firstnameInputRef = useRef(null);
    const lastnameInputRef = useRef(null);

    const items = useAppSelector(state => selectAllItems(state))
    
    const [showPaymentIcons,setShowPaymentIcons] = useState('flex');
    
    const [buttonName,setButtonName] = useState('NEXT')

    const [next,setNext] = useState(false);
    
    const [placeOrder,setPlaceOrder] = useState(false);
    const [creditCard,setCreditCard] = useState<CreditCardState>(InitialiseCreditcardState);
    const [inputState2 ,setInputState2] =useState<State>(InitialiseInputState);
    const [heightState,setHeightState] = useState<HeightState>(InitialiseHeightState);
    const [openState,setOpenState] = useState<OpenState>(InitializeOpenState);

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
        console.log('inputstate2')
        console.log(inputState2)
    },[inputState2]);

    

    const updateState = (newState) =>{
        setTimeout(() => {
            setEmailState({...emailState,icon: 'crossmark.png',error:null})
          }, 2000);
    }
    const handleOnBlur = (e) => {
        
        //e.preventDefault();
        if (e.currentTarget.id === 'email'){
           let ret = emailValidation(e.target.value)
           let image = ret ===null?"checkmark.png":"crossmark.png";
          
           let err = ret ===null?null:ret;
           let val = ret ===null?e.target.value:'';
           
           setEmailState({...emailState,value: val,icon: image,error: ret})
           
        }else{
        
        }
        
    };
    const handleKeyDown1 = (e) => {
       
    }
    const handleChange = (e) =>{
        //alert("dhhh")
        const value = e.target.value
        let ret = emailValidation(e.target.value)
        if(ret ===null){
            //setAddressHeight('900px')
            //setDeliveryAddressHeight('850px')
            setHeightState((prev_state) =>({
                ...prev_state,
                address: {height: '1350px'},
                delivery_address: {height: '1200px'}
            }));
        }
    }
    //const handleOnFocus = () => {
    //    setIsFocused(true);
   // };
    const onNext1 = ()=>{
        if(!placeOrder){
            if(next){
                setPlaceOrder(!placeOrder);
                setButtonName("PLACE ORDER");
            }else{
                
                setNext(!next);
                return ;
            }
        }else{
            alert("Place order now")
        }
    }
    //const onChange = (e)=>{
        //alert(e.target.value)
    //}
    const onNextClickToDelivery = (e) =>{
        
        setHeightState((prev_state) =>({
            ...prev_state,
            address: {height: '1060px'},
            delivery_address: {height: '1060px'},
            delivery: {height:'250px'},
            delivery_section: {height: '90px'},
            address_button_wrapper: {height:'0px'}
        }));
        
    }
    const onCreditCardSectionClick = (e) =>{
        if(openState.paypal.isOpen){
            setOpenState((prev_state)=>({
                ...prev_state,
                paypal:{isOpen:false}
            }));
            setHeightState((prev_state) =>({
                ...prev_state,
                paypal_section: {height: '40px'},
                payment: {height:'350px'},
                
            }));
        }
        if(openState.after_pay.isOpen){
            //setPaymentHeight('350px')
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
                ...prev_state,
                creditcard_section: {height: '290px'},
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
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
                ...prev_state,
                afterpay_section: {height: '40px'},
             //   payment: {height:'350px'},
                
            }));
        }
        
        if(openState.paypal.isOpen){
           
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
                ...prev_state,
                payment: {height:'600px'},
                paypal_section:  {height: '100px'}

                
            }));
        }
        
    }   
    const onAfterPaySectionClick = (e)=>{
        if(openState.credit_card.isOpen){
            setOpenState((prev_state)=>({
                ...prev_state,
                credit_card:{isOpen:false}
            }));
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
                ...prev_state,
                paypal_section: {height: '40px'},
                
            }));
            
        }
        if(openState.after_pay.isOpen){
            setHeightState((prev_state) =>({
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
            setHeightState((prev_state) =>({
                ...prev_state,
                payment: {height:'450px'},
                afterpay_section:  {height: '100px'}
                
            }));
        }
        
    }
    const onNextClickToPayment = (e) =>{
        setHeightState((prev_state) =>({
            ...prev_state,
            payment: {height: '350px'},
            payment_section: {height:'280px'},
            payment_icons:{height:'0px'},
            delivery_button_wrapper:{height:'0px'},
            delivery:{height:'165px'}

        }));
 
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
    const checkboxOnChange = (e) =>{
        
        setInputState2((prev_state)=>({
            ...prev_state,
            [e.target.name]:{...prev_state[e.target.name],checked:!inputState2[e.target.name].checked}
        }));
        console.log(inputState2)
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
            setHeightState((prev_state) =>({
                    ...prev_state,
                    address: {height: '1250px'},
                    delivery_address: {height: '1120px'}
            }));
        }else{
            setInputState2((prev_state) =>({
                ...prev_state,
                [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.RED,show_message:false,show_err_message:true,border_bottom:BorderBottom.RED,err_message:ret}
            }));
        }
    }

    const emailOnBlur = (e) =>{
        let ret = emailValidation(inputState2.email.value);
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
                [e.target.name]:{...prev_state[e.target.name],bg_img:{bgImage},show_err_message:false,border_bottom:{borderBottom}}
            }));
            /*
            if(e.target.name==='company'){
                setInputState2((prev_state) =>({
                    ...prev_state,
                    [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.EMPTY,show_err_message:false,border_bottom:BorderBottom.GREY}
                }));
            }else{
               setInputState2((prev_state) =>({
                ...prev_state,
                [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.GREEN,show_err_message:false,border_bottom:BorderBottom.GREEN}
               }));
            }
            */
        }else{
            setInputState2((prev_state) =>({
                ...prev_state,
                [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.RED,show_err_message:true,border_bottom:BorderBottom.RED,err_message:ret}
            }));
        }
    }
    const emailOnClick =(e)=>{
        const value = e.target.value
        emailInputRef.current.focus();
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
                /*
                if(e.target.name==='company'){
                    setInputState2((prev_state) =>({
                        ...prev_state,
                        [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.EMPTY,show_err_message:false,border_bottom:BorderBottom.GREY}
                    }));
                }else{
                   setInputState2((prev_state) =>({
                    ...prev_state,
                    [e.target.name]:{...prev_state[e.target.name],bg_img:BGImage.GREEN,show_err_message:false,border_bottom:BorderBottom.GREEN}
                   }));
                }
                setHeightState((prev_state) =>({
                    ...prev_state,
                    address: {height: '1150px'},
                    delivery_address: {height: '1000px'}
                }));
                */
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
        console.log(creditCard)
    }
    const onClickRedirecToPaypal = ()=>{

    }
    const onClickApplyPromoCode = () =>{

    }
    /* Datalist validation */
    const dataListValidation = (value)=>{
        return countrylist.includes(value)
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
                        defaultValue={inputState2.email.value} 
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
                  <Address height={heightState.address.height}>
                    <div>ADDRESS</div>
                    <DeliveryAddress height={heightState.delivery_address.height}>
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
                        border_bottom={inputState2.firstname.border_bottom}
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
                        defaultValue={inputState2.unitno.value} 
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
                    {inputState2.streetname.show_message && 
                        <ErrorMessage height={heightState.input_message.height} margin_top={'10px'}>
                            {inputState2.streetname.input_message}
                        </ErrorMessage>
                    }
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
                        {inputState2.mobile.show_message && 
                        <ErrorMessage height={heightState.input_message.height} margin_top={'10px'}>
                            {inputState2.mobile.input_message}
                        </ErrorMessage>
                        }
                        {inputState2.mobile.show_err_message && 
                        <ErrorMessage height={heightState.error_message.height} margin_top={'10px'}>
                            {inputState2.mobile.err_message}
                        </ErrorMessage>
                         }
                    </Wrapper1>
                    </div>
                    <div>&nbsp;</div>
                    <div className={styles.checkbox_wrapper}>
                    <label >
                    <input onChange={(e) => checkboxOnChange(e)}id={inputState2.billing.id} name={inputState2.billing.name} className={styles.checkbox_input} type="checkbox" defaultChecked={inputState2.billing.checked}/>
                    <span>&nbsp;&nbsp;My billing and delivery information are the same.</span>
                    </label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label>
                        <input onChange={(e) => checkboxOnChange(e)}id={inputState2.consent.id} name={inputState2.consent.name} className={styles.checkbox_input} type="checkbox" defaultChecked={inputState2.consent.checked}/>
                        <span>&nbsp;&nbsp;I'm 18+ years old. *</span>
                    </label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    Also want product updates with our newsletter?
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label>
                        <input onChange={(e) => checkboxOnChange(e)}id={inputState2.notify.id} name={inputState2.notify.name} className={styles.checkbox_input} type="checkbox" defaultChecked={inputState2.notify.checked}/>
                        <span>&nbsp;&nbsp;I agree to receive news, promotions, information regarding adidas’ brand, products, activities and events, and any other marketing communications and materials by e-mail, sms, in-app notification and/or telephone from Adidas Australia Pty Ltd. and runtastic GmbH pursuant to the adidas Privacy Policy.HOW?</span>
                    </label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label>
                        <input onChange={(e) => checkboxOnChange(e)}id={inputState2.agree.id} name={inputState2.agree.name} className={styles.checkbox_input} type="checkbox" defaultChecked={inputState2.agree.checked}/>
                        <span>&nbsp;&nbsp;I understand and agree that in certain circumstances, my personal information may be transferred to other entities in the adidas Group and service providers that are located in countries that do not have comparable privacy safeguards to Australia. </span>
                    </label>
                    </div>
                    </DeliveryAddress>
                    <AddressButtonWrapper height={heightState.address_button_wrapper.height} >
                        <Button height={heightState.next_button.height}>
                        <a className={styles.a_button} onClick={onNextClickToDelivery}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                    </AddressButtonWrapper>
                  </Address>
                 
                  <Delivery height={heightState.delivery.height}>
                    <div>DELIVERY OPTIONS</div>
                    <DeliverySection height={heightState.delivery_section.height}>
                        <DeliveryDetails>
                        <div className={styles.delivery_details}>
                        <div>Shipping</div>
                        <div>Free</div>
                        <div>Australia Post (4-7 business days)</div>
                        </div>
                        </DeliveryDetails>
                    </DeliverySection>
                    <DeliveryButtonWrapper height={heightState.delivery_button_wrapper.height} >
                        <Button height={heightState.next_button.height}>
                        <a className={styles.a_button} onClick={onNextClickToPayment}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                    </DeliveryButtonWrapper>
                  </Delivery>
                  <Payment height={heightState.payment.height}>
                    <div>PAYMENT</div>
                    <PaymentIcons height={heightState.payment_icons.height} show={showPaymentIcons}><AmexIcon/><MasterIcon/><VisaIcon/><PaypalIcon/><AfterpayIcon/></PaymentIcons>
                    <PaymentDetailsHeader>
                          <div className={styles.payment_header}>Payments are SSL encrypted so that your credit card and payment details stay safe.</div><div className={styles.ssl}><SSL/></div>
                    </PaymentDetailsHeader>
                    <PaymentSection height={heightState.payment_section.height}>
                        <PaymentDetails>
                        
                         <CreditCardSection height={heightState.creditcard_section.height} isOpen={openState.credit_card.isOpen}>
                            <a className={styles.b_button} onClick={onCreditCardSectionClick}>
                            <span className={styles.button_name}>Debit/Credit Card</span>
                            <span className={styles.s_credit_card}>
                                <Color_Visa/>
                                <Color_Amex/>
                                <Color_Master/>
                            </span>
                            </a>
                            <div className={styles.credit_card_content}>
                                <CreditCardContent setCreditCard={setCreditCard}/>
                            </div>
                        </CreditCardSection>
                        
                        <PaypalSection height={heightState.paypal_section.height} isOpen={openState.paypal.isOpen}>
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

                        <AfterPaySection height={heightState.afterpay_section.height} isOpen={openState.after_pay.isOpen}>
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