import React,{useState,useEffect,useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as styles from './index.module.css';
import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,DeliveryAddress, DeliverySection,DeliveryDetails,PaymentIcons,PaymentSection,PaymentDetails} from './checkout.styled';
import { CreditCardSection,PaymentDetailsHeader,PaypalSection,AfterPaySection,PaypalContent,PromoCodeWrapper,Credit,PayPal,AfterPay } from './checkout.styled';
import {Button,Address,ProductList,ProductRow,ProductDetails,PromoCodeMessage,ErrorMessage} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label,ButtonWrapper,AddressButtonWrapper,DeliveryButtonWrapper} from './input.styled '
import { fieldValidation,emailValidation } from 'app/utils/form_validation';
import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';
import { selectAllItems} from '../../store/cart/cartReducer'
import {NoCard,CreditExpiryDate,PromoCode,White_Paypal,Color_Afterpay,Color_Paypal,Color_Master,Color_Visa,Color_Amex,MasterIcon,VisaIcon,AmexIcon,PaypalIcon,AfterpayIcon,SSL} from 'app/svg/payment_icons';
import CreditCardCvc from 'app/components/credit_card_cvc';
import CreditCardContent from 'app/components/credit_card';
import {State,InitialiseInputState,InitialiseHeightState,HeightState,OpenState,InitializeOpenState,BGImage, BorderBottom} from './input_interface';
const CheckoutPage = (props) => {
    const emailInputRef = useRef(null);
    const items = useAppSelector(state => selectAllItems(state))
    //const [promocodeHeight,setPromocodeHeight] = useState('50px');
    //const [openCreditcardSection,setOpenCreditcardSection] = useState(false);
    //const [openPaypalSection,setOpenPaypalSection] = useState(false);
   // const [openAfterpaySection,setOpenAfterpaySection] = useState(false);
    //const [afterPaySectionHeight,setAfterPaySectionHeight] = useState("40px")
    //const [creditCardSectionHeight,setCreditCardSectionHeight] = useState("250px")
    //const [paypalSectionHeight,setPaypalSectionHeight] = useState("40px")
    //const [zindex,setZindex] = useState('0');
    const [showPaymentIcons,setShowPaymentIcons] = useState('flex');
    //const [borderColor,setBorderColor] = useState('#fff');
    //const [nextAddress, setNextAddress] = useState('block');
    //const [nextDelivery,setNextDelivery] = useState('none');
    //const [isFocused, setIsFocused] = useState(true);
    //const [addressHeight,setAddressHeight] = useState('60px')
    //const [deliveryHeight,setDeliveryHeight] = useState('60px')
    //const [deliveryAddressHeight,setDeliveryAddressHeight] = useState('0px');
    //const [deliverySectionHeight,setDeliverySectionHeight] = useState('0px')
    //const [paymentHeight,setPaymentHeight] = useState('80px')
    //const [paymentIconsHeight,setPaymentIconsHeight]= useState('30px');
    //const [paymentSectionHeight,setPaymentSectionHeight] = useState('0px');
    //const [paymentDetaisHeight,setPaymentDetailsHeight] = useState('0px')
    const [buttonName,setButtonName] = useState('NEXT')
    //const [inputIcon, setInputIcon] = useState('empty.png');
    const [next,setNext] = useState(false);
    //const [showDelivery,setShowDelivery] = useState('none');
    //const [showPayment,setShowPayment] = useState('none');
    const [placeOrder,setPlaceOrder] = useState(false)
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
        console.log('d')
    });

    useEffect(() => {
        console.log("INSSSSSSS")
       console.log(emailState)
       console.log(inputState2)
    },[emailState,inputState2]);

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
           //setAddressHeight('880px')
           //setDeliveryAddressHeight('860px')
           //alert("d")
        }else{
           // alert("e")
            //setAddressHeight('580px')
           // setDeliveryAddressHeight('550px')
        }
        
    };
    const handleKeyDown = (e) => {
        e.target.blur(); 
     
        if(e.keyCode === 13){
            //alert("EE")
            //setAddressHeight('580px')
            //setDeliveryAddressHeight('550px')
          }
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
                address: {height: '1150px'},
                delivery_address: {height: '1000px'}
            }));
        }
    }
    //const handleOnFocus = () => {
    //    setIsFocused(true);
   // };
    const onNext1 = ()=>{
        if(!placeOrder){
            if(next){
                //setShowPayment('block');
               
                //setPaymentHeight('50px');
                setPlaceOrder(!placeOrder);
                setButtonName("PLACE ORDER");
            }else{
                //setShowDelivery('block');
                //setDeliveryHeight('50px');
                
                setNext(!next);
                return ;
            }
        }else{
            alert("Place order now")
        }
    }
    const onChange = (e)=>{
        //alert(e.target.value)
    }
    const onNextClickToDelivery = (e) =>{
        //setNextAddress("none");
        //setNextDelivery('block');
        //setBorderColor('#ccc');
        //setAddressHeight('850px');
        //setDeliveryHeight('200px');
        //setDeliverySectionHeight('100px');
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
            //setPaypalSectionHeight('40px');
            //setPaymentHeight('350px')
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
           //setPaypalSectionHeight("100px")
           // setPaymentHeight('450px')
            
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

    const emailOnChange = (e) =>{
        let ret = emailValidation(e.target.value)
        console.log("EEE")
        console.log(ret)
        if(ret ===null){
           // setHeightState((prev_state) =>({
            //    ...prev_state,
           //     address: {height: '1150px'},
            //    delivery_address: {height: '1000px'}
            //}));
           // setInputState2((prev_state)=>({
           //     ...prev_state,
            //    email:{value:e.targ.value}
           // }));
          
        }else{
            setInputState2((prev_state)=>({
                ...prev_state,
                email:{...prev_state,has_error:true,touched:true}
            }));
        }
    }
    const emailOnBlur = (e) =>{
        //const value = e.target.value
        if(inputState2.email.has_error){
            setInputState2((prev_state)=>({
                ...prev_state,
                email:{bg_img:BGImage.RED}
            }));
        }else{}
          setHeightState((prev_state) =>({
            ...prev_state,
            address: {height: '1150px'},
            delivery_address: {height: '1000px'}
       }));
    }
    const emailOnClick =(e)=>{
        const value = e.target.value
        emailInputRef.current.focus();
       
        /*
        setInputState2((prev_state) =>({
            ...prev_state,
            email: {...prev_state.email,bg_img: BGImage.RED,border_bottom: BorderBottom.RED}
        }));
        console.log(inputState2)
        */
    }
    
    /*** Promo Code Input Event ***/
    const promoCodeOnBlur = (e) =>{
       let img = e.target.value==''?'./assets/images/black_cross.png':'';
        setInputState2((prev_state) =>({
                    ...prev_state,
                    promo_code: {...prev_state.promo_code,bg_image: img}
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

    }
    const onClickRedirecToPaypal = ()=>{

    }
    const onClickApplyPromoCode = () =>{

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
                   
                    <Input ref={emailInputRef} border_bottom={inputState2.email.border_bottom} img_position={inputState2.email.bg_img_pos} width={inputState2.email.width} autoComplete={'email'} onClick={(e) =>emailOnClick(e)} onChange={emailOnChange} id="email1" defaultValue={inputState2.promo_code.value} onBlur={(e)=>emailOnBlur(e)} placeholder="" background={inputState2.email.bg_img}/>
                    <Label>Email</Label>
                    </Wrapper1>
                    {inputState2.email.touched && inputState2.email.has_error && 
                        <ErrorMessage height={heightState.error_message.height}>
                        *Invalid email address
                        </ErrorMessage>
                    }
                  </Contact>
                  <Address height={heightState.address.height}>
                    <div>ADDRESS</div>
                    <DeliveryAddress height={heightState.delivery_address.height}>
                    <div>Delivery Address</div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'first_name'} onChange={handleChange} onKeyDown={handleKeyDown} id="email1" defaultValue={firstNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>First Name</Label>
                    </Wrapper1>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'last_name'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Last Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'505px 10px'} width={'545px'} autoComplete={'company_name'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Company Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'new_email1'} onChange={handleChange} onKeyDown={handleKeyDown} id="email1" defaultValue={firstNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>First Name</Label>
                    </Wrapper1>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'new_email2'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Last Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'505px 10px'} width={'545px'} autoComplete={'new_email2'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Company Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'505px 10px'} width={'545px'} autoComplete={'new_email2'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Company Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'new_email1'} onChange={handleChange} onKeyDown={handleKeyDown} id="email1" defaultValue={firstNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>First Name</Label>
                    </Wrapper1>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'new_email2'} onChange={handleChange} onKeyDown={handleKeyDown} id="email2" defaultValue={lastNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Last Name</Label>
                    </Wrapper1>
                    </div>
                    <div className={styles.input_wrapper}>
                    <Wrapper1>
                    <Input img_position={'220px 10px'} width={'260px'} autoComplete={'new_email1'} onChange={handleChange} onKeyDown={handleKeyDown} id="email1" defaultValue={firstNameState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>First Name</Label>
                    </Wrapper1>
                    </div>
                    <div>&nbsp;</div>
                    <div className={styles.checkbox_wrapper}>
                    <label className={styles.checkbox_label}><input className={styles.checkbox_input} type="checkbox" />My billing and delivery information are the same. </label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label className={styles.checkbox_label}><input className={styles.checkbox_input} type="checkbox" />I'm 18+ years old. *</label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    Also want product updates with our newsletter?
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label className={styles.checkbox_label}><input className={styles.checkbox_input} type="checkbox" />I agree to receive news, promotions, information regarding adidas’ brand, products, activities and events, and any other marketing communications and materials by e-mail, sms, in-app notification and/or telephone from Adidas Australia Pty Ltd. and runtastic GmbH pursuant to the adidas Privacy Policy.HOW?</label>
                    </div>
                    <div className={styles.checkbox_wrapper}>
                    <label className={styles.checkbox_label}><input className={styles.checkbox_input} type="checkbox" />I understand and agree that in certain circumstances, my personal information may be transferred to other entities in the adidas Group and service providers that are located in countries that do not have comparable privacy safeguards to Australia. </label>
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
                                <CreditCardContent/>
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