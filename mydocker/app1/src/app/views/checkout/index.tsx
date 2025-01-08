import React,{useState,useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as styles from './index.module.css';
import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,DeliveryAddress, DeliverySection,DeliveryDetails,PaymentIcons,PaymentSection,PaymentDetails} from './checkout.styled';
import { CreditCardSection,PaymentDetailsHeader,PaypalSection,AfterPaySection,PaypalContent,PromoCodeWrapper,Credit,PayPal,AfterPay } from './checkout.styled';
import {Button,Address,ProductList,ProductRow,ProductDetails} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label,ButtonWrapper} from './input.styled '
import { fieldValidation,emailValidation } from 'app/utils/form_validation';
import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';
import { selectAllItems} from '../../store/cart/cartReducer'
import {NoCard,CreditExpiryDate,PromoCode,White_Paypal,Color_Afterpay,Color_Paypal,Color_Master,Color_Visa,Color_Amex,MasterIcon,VisaIcon,AmexIcon,PaypalIcon,AfterpayIcon,SSL} from 'app/svg/payment_icons';
import CreditCardCvc from 'app/components/credit_card_cvc';
import CreditCardContent from 'app/components/credit_card';
const CheckoutPage = (props) => {
    const items = useAppSelector(state => selectAllItems(state))
    const [promocodeHeight,setPromocodeHeight] = useState('50px');
    const [openCreditSection,setOpenCreditSection] = useState(true);
    const [openPaypalSection,setOpenPaypalSection] = useState(false);
    const [openAfterpaySection,setOpenAfterpaySection] = useState(false);
    const [afterPaySectionHeight,setAfterPaySectionHeight] = useState("40px")
    const [creditCardSectionHeight,setCreditCardSectionHeight] = useState("250px")
    const [paypalSectionHeight,setPaypalSectionHeight] = useState("40px")
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
    const [promoCodeImg,setPromoCodeImg] = useState('black_cross.png');
    const [next,setNext] = useState(false);
    const [showDelivery,setShowDelivery] = useState('none');
    const [showPayment,setShowPayment] = useState('none');
    const [placeOrder,setPlaceOrder] = useState(false)
    const [emailState, setEmailState] = useState({
        icon:'empty.png',value:'',error:null
    });

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
           // alert("e")
            setAddressHeight('580px')
            setDeliveryAddressHeight('550px')
        }
        
    };
    const handleKeyDown = (e) => {
        e.target.blur(); 
     
        if(e.keyCode === 13){
            //alert("EE")
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
        //alert(e.target.value)
    }
    const onNextClickToDelivery = (e) =>{
        setNextAddress("none");
        setNextDelivery('block');
        setAddressHeight('850px');
        setDeliveryHeight('200px');
        setDeliverySectionHeight('100px');
        setBorderColor('#ccc');
    }
    const onCreditCardSectionClick = (e) =>{
        if(openPaypalSection){
            setPaypalSectionHeight('40px');
            setPaymentHeight('350px')
            setOpenPaypalSection(false)
        }
        if(openAfterpaySection){
            setAfterPaySectionHeight('40px');
            setPaymentHeight('350px')
            setOpenAfterpaySection(false)
        }
        if(openCreditSection){
            setCreditCardSectionHeight('40px');
            setPaymentHeight('350px')
            setOpenCreditSection(false);
        }else{
            setCreditCardSectionHeight('240px');
            setPaymentHeight('600px')
            setOpenCreditSection(true);
        }
          
        
    }
    const onPaypalSectionClick = (e) =>{
        if(openCreditSection){
            setCreditCardSectionHeight('40px');
            setPaymentHeight('350px')
            setOpenCreditSection(false)
        }
        if(openAfterpaySection){
            setAfterPaySectionHeight('40px');
            setPaymentHeight('350px')
            setOpenAfterpaySection(false)
        }
        if(openPaypalSection){
           setPaypalSectionHeight("40px")
           setOpenPaypalSection(false)
        }else{
            setPaypalSectionHeight("100px")
            setPaymentHeight('450px')
            setOpenPaypalSection(true)

        }
        
    }   
    const onAfterPaySectionClick = (e)=>{
        if(openCreditSection){
            setCreditCardSectionHeight('40px');
            setPaymentHeight('350px')
            setOpenCreditSection(false)
        }
        if(openPaypalSection){
            setPaypalSectionHeight('40px');
            setPaymentHeight('350px')
            setOpenPaypalSection(false)
        }
        if(openAfterpaySection){
            setAfterPaySectionHeight("40px")
            setOpenAfterpaySection(false)
            setPaymentHeight('350px')
    
        }else{
            setAfterPaySectionHeight("100px")
            setPaymentHeight('450px')

            setOpenAfterpaySection(true)
        }
        
    }
    const onNextClickToPayment = (e) =>{
        //setNextAddress("none");
        setNextDelivery('none');
        //setAddressHeight('850px');
        //setDeliveryHeight('150px');
        //setDeliverySectionHeight('150px');
        setPaymentHeight("800px")
        setPaymentSectionHeight('440px');
        setShowPaymentIcons('none');
        setPaymentIconsHeight('0px');
        //setCreditCardSectionHeight('40px');
    }
    const onPromocodeClick = () =>{
        setPromocodeHeight('120px')
    }
    const promoCodeOnChange = (e) =>{
        
        setPromocodeHeight('250px')
    }
    //const  = (e) =>{
        
        //setPromocodeHeight('250px')
    //}
    const promoCodeOnChick = (e) =>{
        setPromoCodeImg('')
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
                        <a className={styles.a_button} onClick={onNextClickToDelivery}>
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
                        <a className={styles.a_button} onClick={onNextClickToPayment}>
                        <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                        </ButtonWrapper>
                  </Delivery>
                  <Payment height={paymentHeight}>
                    <div>PAYMENT</div>
                    <PaymentIcons height={paymentIconsHeight} show={showPaymentIcons}><AmexIcon/><MasterIcon/><VisaIcon/><PaypalIcon/><AfterpayIcon/></PaymentIcons>
                    <PaymentDetailsHeader>
                          <div className={styles.payment_header}>Payments are SSL encrypted so that your credit card and payment details stay safe.</div><div className={styles.ssl}><SSL/></div>
                    </PaymentDetailsHeader>
                    <PaymentSection height={paymentSectionHeight}>
                        <PaymentDetails>
                         <CreditCardSection height={creditCardSectionHeight} isOpen={openCreditSection}>
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
                        <PaypalSection height={paypalSectionHeight} isOpen={openPaypalSection}>
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

                        <AfterPaySection height={afterPaySectionHeight} isOpen={openAfterpaySection}>
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
                        {(openCreditSection || openAfterpaySection) &&
                         <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onNextClickToPayment}>
                        <span className={styles.button_name}>Place Order</span><span className={styles.arrows}><RightArrow/></span>
                        </a>
                        </Button>
                        }
                        {openPaypalSection &&
                        <Button height={'50px'}>
                        <a className={styles.a_button} onClick={onNextClickToPayment}>
                        <span className={styles.white_paypal}><White_Paypal/></span>
                        </a>
                        </Button>}
                        </PaymentDetails>
                    </PaymentSection>
                  </Payment>
                  <Button height={'0px'}>
                  <a className={styles.a_button} onClick={onNext}>
                    <span className={styles.button_name}>{buttonName}</span>
                    <span className={styles.arrows}><RightArrow/></span>
                  </a>
                  </Button>
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
                    <PromoCodeWrapper height={promocodeHeight}>
                    <div className={styles.promo_code} onClick={onPromocodeClick}>
                       
                        <PromoCode/>&nbsp;USE A PROMO CODE
                        <Wrapper1>
                        <Input width={'375px'} autoComplete={'promocode'} onClick={promoCodeOnChick} onChange={promoCodeOnChange} id="promocode" defaultValue='' onBlur={promoCodeOnChange} placeholder="" background={ `./assets/images/${promoCodeImg}`}/>
                        <Label>Promo Code</Label>
                      

                       </Wrapper1>
                        <Button height={'50px'}>
                           <a className={styles.c_button} onClick={onNext}>
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