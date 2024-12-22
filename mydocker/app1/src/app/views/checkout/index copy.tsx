import React,{useState,useEffect} from 'react';
import * as styles from './index.module.css';
import { Container,Wrapper,Header,Company,Bag,Title,Description,Content,ContentRight,ContentLeft,Contact } from './checkout.styled';
import {Email,Address} from './checkout.styled';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/layout/usermenu/bag';
import { Input ,Label,Wrapper1,Input1,Label1} from './input.styled '
import { fieldValidation,emailValidation } from 'app/utils/form_validation';
const CheckoutPage = (props) => {
    const [inputIcon, setInputIcon] = useState('empty.png');
    const [emailState, setEmailState] = useState({
        icon:'empty.png',value:'',error:null
    });
    const [inputState, setInputState] = useState([
        { id: 'email',icon:'crossmark.png',value:'email',error:null},
        { id: 'firstName',icon:'crossmark.png',value:'first name',error:null}
    ])

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
          
        }
        //alert(e.currentTarget.id)
        //const newState = { id: 'email',icon:'crossmark.png',value:'email',error:null};
        //setInputState([...inputState, row])
        //updateState(newState)
    };
    return (
        <Container>
            <Wrapper>
            <Header>
                <Company><Logo/></Company>
                <Bag><ShoppingBagIcon width={'50'} height={'50'}/></Bag>
            </Header>
            <Title>Checkout</Title>
            <Description>(3 items)$288.00</Description>
            <Content>
                
                <ContentLeft>
                    <form autoComplete='off'>
                    <div>Contact</div>
                    <Wrapper1>
                    <Input id="email" defaultValue={emailState.value} onBlur={handleOnBlur} placeholder="" img={process.env.PUBLIC_IMAGE_URL + emailState.icon}/>
                    <Label>Email</Label>
                    </Wrapper1>
                    <div className={styles.err_msg}>
                       {emailState.error !== null?emailState.error:''}
                    </div>
                    <div className={styles.line}>&nbsp;</div>
                    <Address>
                        <div>Address</div>
                        <div>Delivery address</div>
                        <div className={styles.row}>
                            <div className={styles.row_left}>
                            <Wrapper1>
                            <Input placeholder="" img={process.env.PUBLIC_IMAGE_URL + 'checkmark.png'}/>
                            <Label>First Name</Label>
                            </Wrapper1>
                            </div>
                            <div className={styles.row_right}>
                            <Wrapper1>
                            <Input placeholder="" img={process.env.PUBLIC_IMAGE_URL + 'checkmark.png'}/>
                            <Label>First Name</Label>
                            </Wrapper1>
                            </div>
                        </div>
                        <div className={styles.row1}>
                            <Wrapper1>
                            <Input1 placeholder="" img={process.env.PUBLIC_IMAGE_URL + 'checkmark.png'}/>
                            <Label1>First Name</Label1>
                            </Wrapper1>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.row_left}>
                            <Wrapper1>
                            <Input placeholder="" img={process.env.PUBLIC_IMAGE_URL + 'checkmark.png'}/>
                            <Label>First Name</Label>
                            </Wrapper1>
                            </div>
                            <div className={styles.row_right}>
                            <Wrapper1>
                            <Input placeholder="" img={process.env.PUBLIC_IMAGE_URL + 'checkmark.png'}/>
                            <Label>First Name</Label>
                            </Wrapper1>
                            </div>
                        </div>
                        <div>ddd</div>
                    </Address>
                    
                  
                    
                    </form>
                </ContentLeft>
                <ContentRight>Right</ContentRight>
            </Content>
            </Wrapper>
        </Container>
    )
}
export default CheckoutPage;