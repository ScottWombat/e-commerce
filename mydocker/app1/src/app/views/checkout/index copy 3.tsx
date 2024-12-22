import React,{useState,useEffect} from 'react';
import * as styles from './index.module.css';
import { Container,Center,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact,Delivery,Payment,FakeDelivery,FakePayment ,DeliveryAddress} from './checkout.styled';
import {Button,Address} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Wrapper1,Input,Label} from './input.styled '
import { fieldValidation,emailValidation } from 'app/utils/form_validation';
import InputBox from 'app/components/input';
import RightArrow from 'app/svg/right_arrow';
const CheckoutPage = (props) => {
    const [addressHeight,setAddressHeight] = useState('60px')
    const [deliveryHeight,setDeliveryHeight] = useState('60px')
    const [deliveryAddressHeight,setDeliveryAddressHeight] = useState('0px')
    const [paymentHeight,setPaymentHeight] = useState('60px')
    const [buttonName,setButtonName] = useState('NEXT')
    const [showFakeDelivery,setFakeDelivery] = useState('none')
    const [showFakePayment,setFakePayment] = useState('none')
    const [inputIcon, setInputIcon] = useState('empty.png');
    const [next,setNext] = useState(false);
    const [showDelivery,setShowDelivery] = useState('none');
    const [showPayment,setShowPayment] = useState('none');
    const [placeOrder,setPlaceOrder] = useState(false)
    const [emailState, setEmailState] = useState({
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
        e.preventDefault();
        if (e.currentTarget.id === 'email'){
           let ret = emailValidation(e.target.value)
           let image = ret ===null?"checkmark.png":"crossmark.png";
          
           let err = ret ===null?null:ret;
           let val = ret ===null?e.target.value:'';
           
           setEmailState({...emailState,value: val,icon: image,error: ret})
           setAddressHeight('780px')
           setDeliveryAddressHeight('650px')
         
        }else{
            setAddressHeight('680px')
           setDeliveryAddressHeight('550px')
        }
        
    };
    const handleKeyDown = (e) => {
       
        if(e.keyCode === 13){
            e.target.blur(); 
            setAddressHeight('680px')
            setDeliveryAddressHeight('550px')
          }
    }
    const handleChange = (e) =>{
        const value = e.target.value
        let ret = emailValidation(e.target.value)
        if(ret ===null){
            setAddressHeight('780px')
            setDeliveryAddressHeight('650px')
        }
    }
    const onNext = ()=>{
        if(!placeOrder){
            if(next){
                setShowPayment('block');
                setFakePayment("none");
                setPaymentHeight('50px');
                setPlaceOrder(!placeOrder);
                setButtonName("PLACE ORDER");
            }else{
                setShowDelivery('block');
                setDeliveryHeight('50px');
                setFakeDelivery("none");
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
                    <Input autoComplete={'new_email'} onChange={handleChange} onKeyDown={handleKeyDown} id="email" defaultValue={emailState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
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
                        <div className={styles.left}>
                         <InputBox id="dd1" onChange={onChange} width={'270px'} label={'First name'}/>
                         <div>error</div>
                        </div>
                        <div className={styles.right}>
                        <InputBox id="dd2" onChange={onChange} width={'270px'} label={'Last name'}/>
                        <div>error</div>
                        </div>
                    </div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.left}>
                         <InputBox id="dd3" onChange={onChange} width={'570px'} label={'Company name'}/>
                         <div>error</div>
                        </div>
                    </div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.left}>
                         <InputBox id="dd4" onChange={onChange} width={'270px'} label={'Lvl,Apt or Unit No.'}/>
                         <div>error</div>
                        </div>
                        <div className={styles.right}>
                        <InputBox id="dd5" onChange={onChange} width={'270px'} label={'Street No*'}/>
                        <div>error</div>
                        </div>
                    </div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.left}>
                         <InputBox id="dd6" onChange={onChange} width={'570px'} label={'Address'}/>
                         <div>error</div>
                        </div>
                    </div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.left}>
                         <InputBox id="ddo" onChange={onChange} width={'570px'} label={'Suburb *'}/>
                         <div>error0</div>
                        </div>
                    </div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.left}>
                         <InputBox id="dd46" onChange={onChange} width={'270px'} label={'Post Code *'}/>
                         <div>error</div>
                        </div>
                        <div className={styles.right}>
                        <InputBox id="dd56" onChange={onChange} width={'270px'} label={'Country *'}/>
                        <div>error</div>
                        </div>
                    </div>
                    </DeliveryAddress>
                  </Address>
                  <Delivery height={deliveryHeight}>
                    <div>DELIVERY OPTIONS</div>
                   
                  </Delivery>
                  <Payment height={paymentHeight}>
                    <div>PAYMENT</div>
                  </Payment>
                  <Button height={'0px'}>
                  <a className={styles.a_button} onClick={onNext}>
                    <span className={styles.button_name}>{buttonName}</span><span className={styles.arrows}><RightArrow/></span>
                  </a>
                  </Button>
                  
                  <FakeDelivery show={showFakeDelivery}>
                   <div>Delivery Option</div>
                  </FakeDelivery>
                  <FakePayment show={showFakePayment}>
                    <div>Payment</div>
                  </FakePayment>
                  
                  </form>
                </ContentLeft>
                <ContentRight>Right</ContentRight>
            </Content>
            </Center>
        </Container>
    )
}
export default CheckoutPage;