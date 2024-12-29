import React,{useState,useEffect} from 'react';
import * as styles from './index.module.css';
import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,DeliveryAddress, DeliverySection,DeliveryDetails,PaymentIcons,PaymentSection,PaymentDetails} from './checkout.styled';
import { CreditCardSection,PaymentDetailsHeader,Credit,PayPal,AfterPay } from './checkout.styled';
import {Button,Address} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label,ButtonWrapper} from './input.styled '
import { fieldValidation,emailValidation } from 'app/utils/form_validation';
import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';
import {NoCard,CreditExpiryDate,Color_Afterpay,Color_Paypal,Color_Master,Color_Visa,Color_Amex,MasterIcon,VisaIcon,AmexIcon,PaypalIcon,AfterpayIcon,SSL} from 'app/svg/payment_icons';
import CreditCardCvc from 'app/components/credit_card_cvc';
import CreditCardContent from 'app/components/credit_card';
const CheckoutPage = (props) => {
    const [creditCardSectionHeight,setCreditCardSectionHeight] = useState("40px")
    const [zindex,setZindex] = useState('0');
    const [showPaymentIcons,setShowPaymentIcons] = useState('flex');
    const [borderColor,setBorderColor] = useState('#fff');
    const [nextAddress, setNextAddress] = useState('block');
    const [nextDelivery,setNextDelivery] = useState('none');
    const [isFocused, setIsFocused] = useState(true);
    const [addressHeight,setAddressHeight] = useState('60px')
    const [deliveryHeight,setDeliveryHeight] = useState('60px')
    const [deliveryAddressHeight,setDeliveryAddressHeight] = useState('0px');
    const [deliverySectionHeight,setDeliverySectionHeight] = useState('0px')
    const [paymentHeight,setPaymentHeight] = useState('80px')
    const [paymentIconsHeight,setPaymentIconsHeight]= useState('30px');
    const [paymentSectionHeight,setPaymentSectionHeight] = useState('0px');
    const [paymentDetaisHeight,setPaymentDetailsHeight] = useState('0px')
    const [buttonName,setButtonName] = useState('NEXT')
    const [inputIcon, setInputIcon] = useState('empty.png');
    const [next,setNext] = useState(false);
    const [showDelivery,setShowDelivery] = useState('none');
    const [showPayment,setShowPayment] = useState('none');
    const [placeOrder,setPlaceOrder] = useState(false)
    const [emailState, setEmailState] = useState({
        icon:'empty.png',value:'',error:null
    });

    const [firstNameState, setfirstNameState] = useState({
        icon:'empty.png',value:'',error:null
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
    },[emailState]);

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
           setAddressHeight('880px')
           setDeliveryAddressHeight('850px')
           //alert("d")
        }else{
            alert("e")
            setAddressHeight('580px')
            setDeliveryAddressHeight('550px')
        }
        
    };
    const handleKeyDown = (e) => {
        e.target.blur(); 
     
        if(e.keyCode === 13){
            alert("EE")
            setAddressHeight('580px')
            setDeliveryAddressHeight('550px')
          }
    }
    const handleChange = (e) =>{
        //alert("dhhh")
        const value = e.target.value
        let ret = emailValidation(e.target.value)
        if(ret ===null){
            setAddressHeight('900px')
            setDeliveryAddressHeight('850px')
        }
    }
    const handleOnFocus = () => {
        setIsFocused(true);
    };
    const onNext = ()=>{
        if(!placeOrder){
            if(next){
                setShowPayment('block');
               
                setPaymentHeight('50px');
                setPlaceOrder(!placeOrder);
                setButtonName("PLACE ORDER");
            }else{
                setShowDelivery('block');
                setDeliveryHeight('50px');
                
                setNext(!next);
                return ;
            }
        }else{
            alert("Place order now")
        }
    }
    const onChange = (e)=>{
        alert(e.target.value)
    }
    const onNextDeliveryClick = (e) =>{
        setNextAddress("none");
        setNextDelivery('block');
        setAddressHeight('850px');
        setDeliveryHeight('200px');
        setDeliverySectionHeight('100px');
        setBorderColor('#ccc');
    }
    const onCreditCardSectionClick = (e) =>{
        if(creditCardSectionHeight =='40px'){
          setCreditCardSectionHeight('440px');
        }else{
            setCreditCardSectionHeight('40px');
        }
    }
    const onNextPaymentClick = (e) =>{
        
        //setNextAddress("none");
        setNextDelivery('none');
        //setAddressHeight('850px');
        //setDeliveryHeight('150px');
        //setDeliverySectionHeight('150px');
        setPaymentHeight("950px")
        setPaymentSectionHeight('700px');
        setShowPaymentIcons('none');
        setPaymentIconsHeight('0px');
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
                    <Input width={'260px'}  onChange={handleChange} id="email" defaultValue={emailState.value} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon} onFocus={handleOnFocus}/>
                    <Label>Email</Label>
                    </Wrapper1>
                    <div className={styles.err_msg}>
                       {emailState.error !== null?emailState.error:''}
                    </div>
                  </Contact>
                  <Address height={addressHeight}>
                    <div>ADDRESS</div>
                    <DeliveryAddress height={deliveryAddressHeight}>
                    <div>Delivery Address</div>
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
                    <ButtonWrapper display={nextAddress} >
                        <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onNextDeliveryClick}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                        </ButtonWrapper>
                    </DeliveryAddress>
                   
                  </Address>
                 
                  <Delivery height={deliveryHeight}>
                    <div>DELIVERY OPTIONS</div>
                    <DeliverySection height={deliverySectionHeight} color={borderColor}>
                        <DeliveryDetails>
                        <div className={styles.delivery_details}>
                        <div>Shipping</div>
                        <div>Free</div>
                        <div>Australia Post (4-7 business days)</div>
                        </div>
                        </DeliveryDetails>
                    </DeliverySection>
                    <ButtonWrapper display={nextDelivery} >
                        <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onNextPaymentClick}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                        </ButtonWrapper>
                  </Delivery>
                  <Payment height={paymentHeight}>
                    <div>PAYMENT</div>
                    <PaymentIcons height={paymentIconsHeight} show={showPaymentIcons}><AmexIcon/><MasterIcon/><VisaIcon/><PaypalIcon/><AfterpayIcon/></PaymentIcons>
                    <PaymentSection height={paymentSectionHeight}>
                        <PaymentDetails>
                          <PaymentDetailsHeader>
                          <div className={styles.payment_header}>Payments are SSL encrypted so that your credit card and payment details stay safe.</div><div className={styles.ssl}><SSL/></div>
                         </PaymentDetailsHeader>
                         <CreditCardSection height={creditCardSectionHeight}>
                            <a className={styles.b_button} onClick={onCreditCardSectionClick}>
                            <span className={styles.button_name}>Debit/Credit Card</span>
                            <span className={styles.s_credit_card}>
                                <Color_Visa/>
                                <Color_Amex/>
                                <Color_Master/>
                                <CreditCardCvc zindex={zindex}/>
                                <NoCard/>
                                <CreditExpiryDate/>
                            </span>
                            </a>
                            <div className={styles.credit_card_content}>
                                <CreditCardContent/>
                            </div>
                        </CreditCardSection>
                        
                      
                         <input type='button' value='PLACE ORDER'/>
                         <input type='button' value='Paypal'/>
                        </PaymentDetails>
                    </PaymentSection>
                  </Payment>
                  <Button height={'0px'}>
                  <a className={styles.a_button} onClick={onNext}>
                    <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                  </a>
                  </Button>
                  </form>
                </ContentLeft>
                <ContentRight>Right</ContentRight>
            </Content>
            </Center>
        </Container>
    )
}
export default CheckoutPage;