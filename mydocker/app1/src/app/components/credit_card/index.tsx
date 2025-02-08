import React, { useState } from 'react';
import styled from "styled-components";
import Cards from 'react-credit-cards-2';
import {CardNameMask,CardNumberMask,ExpiryDateMask,CVCMask} from './input_mask';
import * as styles from './index.module.css';
import {SelectIcon} from './icons'
interface WrapperProps {
    height?: string;
}
export const Wrapper = styled.div<WrapperProps>`
    display:grid;
    grid-template-columns: 50% 50%;
    transition: height 1s ease;
    -webkit-transition: height 1s ease;
    height: ${p => p.height};
    overflow: hidden;
`;
export const LeftWrapper = styled.div`

`;
export const RightWrapper = styled.div`
  display:relative;
  width:100%;
`;

const CreditCardContent = (props) => {
    const [lightcolor,setLightcolor] = useState('grey');
    const [darkcolor,setDarkcolor] = useState("greydark");
    const [creditcode,setCreditcode] = useState('0');
    const [cardname,setCardname]= useState('');
    const [cardnumber,setCardnumber] = useState('0000 0000 0000 0000');
    const [expirydate,setExpirydate] = useState('00/00')
    const [cvc,setCvc] = useState('');
    const [flip,setFlip] = useState(false);
   
    const doFlip = (value)=>{
        setFlip(value)
    }
    const handleChange =(e)=>{
        let name = e.target.name;
        switch (name){
            case 'card_name':
                setCardname(e.target.value);
                props.setCreditCard((prev_state)=>({
                    ...prev_state,
                    name:{...prev_state.name,value:e.target.value}
                }));
                break;
            case 'card_number':
                setCardnumber(e.target.value);
                props.setCreditCard((prev_state)=>({
                    ...prev_state,
                    number:{...prev_state.number,value:e.target.value}
                }));
                break;
            case 'expiry_date':
                setExpirydate(e.target.value);
                props.setCreditCard((prev_state)=>({
                    ...prev_state,
                    expiry:{...prev_state.expiry,value:e.target.value}
                }));
                break;
            default:
                props.setCreditCard((prev_state)=>({
                    ...prev_state,
                    cvc:{...prev_state.cvc,value:e.target.value}
                }));
                setCvc(e.target.value)
        }
        
    }
    const onComplete= (value)=>{
       let credit_number_code = value.charAt(0)
       switch(credit_number_code){
            case '2':
                setLightcolor("orange")
                setDarkcolor('orangedark');
                setCreditcode('2')
                break;
            case '5':
                console.log('master');
                setLightcolor("red")
                setDarkcolor('reddark');
                setCreditcode('5')
                break;
            case '4':
                console.log('visa')
                setLightcolor("lime")
                setDarkcolor('limedark');
                setCreditcode('4')
                break;
            case '3':
                console.log('amex')
                setLightcolor("black")
                setDarkcolor('blackdark');
                setCreditcode('3')
                break;
            default:
                console.log('unknown')
                setLightcolor("grey")
                setDarkcolor('greydark');
                setCreditcode('0')

       }
    }
    return (
        <Wrapper height={props.height}>
            <LeftWrapper>
                <div className={styles.container3 + ' ' +styles.preload}>
                  <div className={styles.creditcard + ' ' + (flip?styles.flipped:'back-flip')}>
                  <div className={styles.front}>
                  <div id={styles['ccsingle']}><SelectIcon code={creditcode}/></div>
                  <svg version="1.1" id={styles['cardfront']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 750 471" className={styles.enableBackground} xmlSpace="preserve">
                    <g id="Front">
                        <g id="CardBackground">
                            <g id="Page-1_1_">
                                <g id="amex_1_">
                                    <path id="Rectangle-1_1_" className={styles['lightcolor'] + ' ' + styles[`${lightcolor}`]} d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                    C0,17.9,17.9,0,40,0z" />
                                </g>
                            </g>
                            <path className={styles['darkcolor'] + ' ' + styles[`${darkcolor}`]} d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
                        </g>
                        <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber" className={styles.st2 + ' ' + styles.st3 + ' ' + styles.st4}>{cardnumber}</text>
                        <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" className={styles.st2 + ' ' + styles.st5 + ' '+ styles.st6}>{cardname}</text>
                        <text transform="matrix(1 0 0 1 54.1074 389.8793)" className={styles.st7 + ' ' +styles.st5 + ' ' +styles.st8}>cardholder name</text>
                        <text transform="matrix(1 0 0 1 479.7754 388.8793)" className={styles.st7 + ' ' +styles.st5 + ' ' +styles.st8}>expiration</text>
                        <text transform="matrix(1 0 0 1 65.1054 241.5)" className={styles.st7 + ' ' + styles.st5 + ' ' +styles.st8}>card number</text>
                        <g>
                            <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire" className={styles.st2 + ' ' +styles.st5 + ' ' +styles.st9}>{expirydate}</text>
                            <text transform="matrix(1 0 0 1 479.3848 417.0097)" className={styles.st2+ ' ' + styles.st10 + ' ' +styles.st11}>VALID</text>
                            <text transform="matrix(1 0 0 1 479.3848 435.6762)" className={styles.st2 + ' ' +styles.st10 + ' ' +styles.st11}>THRU</text>
                            <polygon className={styles.st2} points="554.5,421 540.4,414.2 540.4,427.9    " />
                        </g>
                        <g id="cchip">
                            <g>
                                <path className={styles.st2} d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
                            </g>
                            <g>
                                <g>
                                    <rect x="82" y="70" className={styles.st12} width="1.5" height="60" />
                                </g>
                                <g>
                                    <rect x="167.4" y="70" className={styles.st12} width="1.5" height="60" />
                                </g>
                                <g>
                                    <path className={styles.st12} d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
                                </g>
                                <g>
                                    <rect x="82.8" y="82.1" className={styles.st12} width="25.8" height="1.5" />
                                </g>
                                <g>
                                    <rect x="82.8" y="117.9" className={styles.st12} width="26.1" height="1.5" />
                                </g>
                                <g>
                                    <rect x="142.4" y="82.1" className={styles.st12} width="25.8" height="1.5" />
                                </g>
                                <g>
                                    <rect x="142" y="117.9" className={styles.st12} width="26.2" height="1.5" />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Back">
                    </g>
                </svg>
                </div>
                <div className={styles.back}>
                <svg version="1.1" id={styles["cardback"]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" viewBox="0 0 750 471" className={styles.enableBackground} xmlSpace="preserve">
                    <g id="Front">
                        <line className={styles.st0} x1="35.3" y1="10.4" x2="36.7" y2="11" />
                    </g>
                    <g id="Back">
                        <g id="Page-1_2_">
                            <g id="amex_2_">
                                <path id="Rectangle-1_2_" className={`${styles.darkcolor} ${styles.greydark}`} d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z" />
                            </g>
                        </g>
                        <rect y="61.6" className={styles.st2} width="750" height="78" />
                        <g>
                            <path className={styles.st3} d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z" />
                            <rect x="42.9" y="198.6" className={styles.st4} width="664.1" height="10.5" />
                            <rect x="42.9" y="224.5" className={styles.st4} width="664.1" height="10.5" />
                            <path className={styles.st5} d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
                        </g>
                        <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" className={styles.st6 + ' ' + styles.st7}>{cvc}</text>
                        <g className={styles.st8}>
                            <text transform="matrix(1 0 0 1 518.083 280.0879)" className={styles.st9 + ' ' + styles.st6 + ' ' +styles.st10}>security code</text>
                        </g>
                        <rect x="58.1" y="378.6" className={styles.st11} width="375.5" height="13.5" />
                        <rect x="58.1" y="405.6" className={styles.st11} width="421.7" height="13.5" />
                        <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback" className={styles.st12 + ' ' +styles.st13}>{cardname}</text>
                    </g>
                </svg>
                </div>
                </div>
                </div>
            </LeftWrapper>
            <RightWrapper>
                <div className={styles.field_container1}>
                    <label htmlFor="card_name" className={styles.lbl}>Name</label>
                    <CardNameMask className={styles.txt} id="card_name" type="text" name="card_name" handleChange={handleChange} onComplete={onComplete}/>
                    <label htmlFor="card_number" className={styles.lbl}>Card Number</label>
                    <CardNumberMask className={styles.txt} id="card_number" type="text" name="card_number" handleChange={handleChange} onComplete={onComplete}/>
                </div>
                <div className={styles.field_container2}>
                   
                    <div className={styles.inputPair}>
                        <label htmlFor="expiry_date" className={styles.lbl}>Expiry Date</label>
                        <ExpiryDateMask  className={styles.txt} id="expiry_date" type="text" name="expiry_date" handleChange={handleChange} onComplete={doFlip}/>
                    </div>
                    <div className={styles.inputPair}>
                        <label htmlFor="cvc" className={styles.lbl}>Security Code</label>
                        <CVCMask className={styles.txt} id="cvc" type="text" name="cvc" handleChange={handleChange} doFlip={doFlip}/>
                    </div>
                   
                </div>
            </RightWrapper>
        </Wrapper>
    )
}

export default CreditCardContent;