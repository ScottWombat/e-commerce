import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as Icons from 'app/components/icon';
import { BillingSection, OrderSection, Column, Field, Container, TopMenu, LogoSection, UserMenu, Title, Description, ButtonGroup, ApplePayButton, GooglePayButton, Content, Billing, Order, Header1, Header2, Row, } from './index.styled';
import * as s from './index.styled';
import * as styles from './index.module.css';
import { Logo } from 'app/components/logo';
import { ShoppingBagIcon } from 'app/components/icon/bag';
import { RadioButton, RadioGroup } from 'app/components/form/radio-button';
import { Radio } from 'app/components/form/radio-button2/radio';
import { TextInput } from 'app/components/form/text-input';
import CreditCardCvc from 'app/components/credit_card_cvc';
import countries from 'app/data/CountryCodes.json';
import { InitCustomerInfoState } from './initialize-state';
import { CountryDropdown } from 'app/components/country-dropdown';
import { AllTypes,PayPal,AfterPay,ZipItNow } from 'app/svg/all_types';
const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
const regexLen = /^([1-9]{3})$/;
const rex1 = /([1-9][1-9][1-9])$/;
const phoneRegex = /^\+?[\d\s-]{7,20}$/;
const expiryDateExpTest = (value) => {

     console.log(value)
     console.log(rex1.test(value))

}
interface Item{
     id?:string,
     val?: string,
     err?: string
}

interface Field {
     mobile?: {Item}
   
}
const Checkout = ({ }) => {
     
     //const [value, setValue] = useState(null);
     const [countryObject,setCountryObject] = useState(null);
     const [dialCode,setDialCode]= useState(null)
     const [currentFocusedElm, setCurrentFocusedElm] = useState(null);
     let onCardInputBlur = useCallback(() => {
          setCurrentFocusedElm(null);
     }, []);
    // const [customerDetails,setCustomerDetails] = useState<Item[]>([]);
    const [customerInfo,setCustomerInfo] = useState(InitCustomerInfoState);
     const [card, setCard] = useState({ card_name: '', card_number: '', expiry_date: '', cvc: '' });
     //const [customerField, setCustomerField] = useState<Field>({id:'',value:'',err:''});
     const [expDate, setExpDate] = useState('');
     const [cvc, setCvc] = useState('');
     const [cardHolder, setCardHolder] = useState('');
     const [cardNumber, setCardNumber] = useState('');
     const [err, setErr] = useState('');
     //const [portfolioData, setPortfoloioData] = useState<IItem[]>([]);
     const [selectedOption, setSelectedOption] = useState("local_pickup");
     useEffect(() => {
          console.log("Customer Info:" +JSON.stringify(customerInfo))
     },[customerInfo])
     useEffect(() => {
          
         console.log(customerInfo.mobile.value)
         //console.log(value)
         //console.log("D:"+ dialCode);
         /*countries.data.map((gh, i)=>{
         
             console.log(gh.name)
          
         })
         var data_filter = countries.data.filter( element => element.name =="Thailand")
         console.log(data_filter.length)
         console.log(data_filter[0].dial_code)
         */
     },[customerInfo.mobile.value]);

     //useEffect(()=>{
          //console.log(countries)
          //console.log("K:" + ref)
         // var data_filter = countries.filter( element => element.name ==value)
          //console.log(data_filter)
          //setDialCode(data_filter[0].dial_code)
     //},[setValue])

     useEffect(() => {
          console.log("Card:" + card.card_number)
          //let value = card.card_number;
          // let v0 = value.substring(0, 4);
          //let v1 = value.substring(4,8);
          // let v2 = value.substring(8, 12);
          // let v3 = value.substring(12, 16);
          // let v = `${v0} ${v1} ${v2} ${v3}`;
          // setCard({...card,card_number:value})
          //console.log("update card numberr:" +card.card_number)
          //current values in here
          //const re = /^\d{1,3}$/;
          /*
          console.log("Exp:" +expDate.length)
          if(expDate.length==4){
               console.log("EEE")
               setExpDate((prevExpDate) =>{
                    const newExpDate = prevExpDate + '/'
                   return newExpDate;
               })
          }
          */
          //let data = expDate.split("");
          //console.log(expDate)
          /*
          let cardExpirationDate = (data.map((x,index) => {
                    return index ===  1 ? x+"/" : x
                  })).join("");
          setExpDate(cardExpirationDate);
          */

     }, [card.card_number])

     const handleRadioChange = e => {
          setCustomerInfo({...customerInfo,shipping:{...customerInfo.shipping,value:e.target.id}})
          setSelectedOption(e.target.id);
     };
     const expDateKeydonw = (e) => {

     }
     const handleKeyDown = (e) => {
          //const re = /^\d{1,3}$/;
          //const re = /^(0[1-9]|1[0-9])\/([2][0-9]{3}|[5-9]{2})$/;
          if (e.target.id === 'exp_date') {
               const re = /^([0]?[1-9]|1[0-2])\/([2][0][2][5-9]|[2][5-9])$/;
               console.log(re.test(e.currentTarget.value))
               var theEvent = e || window.event;
               if (!re.test(e.currentTarget.value)) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();

               }
          } else if (e.target.id === 'cvc') {

               const cvcRegex = /[0-9]/;
               var theEvent = e || window.event;
               if (!cvcRegex.test(e.currentTarget.value)) {
                    //alert('d')
                    // theEvent.returnValue = false;
                    // if (theEvent.preventDefault) theEvent.preventDefault();
                    e.preventDefault();
               }
               //setCvc()
          }
        
          //if (!/[0-9]/.test(e.key) && (e.key !== '/') && (e.keyCode !== 8)) {
          //     e.preventDefault();
          //} 

          // e.currentTarget.value = e.currentTarget.value.replace(/^(\d\d)(\d{4})$/g,'$1/$2')
          //console.log((/^(0[1-9]|1[0-2])\/([2][0-9]{3}|[5-9]{2})$/.test(e.currentTarget.value)))
          //e.currentTarget.value = e.currentTarget.value.replace(/^(0[1-9]|1[0-2])\/([2][0-9]{3}|[2]{5-9})$/g,'$1/$2')
          //setExpDate(e.currentTarget.value );

          //.replace(/(\d{4})(\d)/, "$1");

     }
     const customerHandleTextChange = e =>{
          let { value, name } = e.target;
          
          if(name==='first_name'){
               let rex1='^\w+(\s+\w+)*$';
               
          }else if(name==='last_name'){
               
          }else if(name==='email_address'){

          }else if (name==='mobile'){
               let mobile_number = value;
               const phoneRegex = /^\d{10}$/;
               value = value.replace(/\D/g, '');
               mobile_number =value.replace(/(\d{4})/, '$1 ')
                             .replace(/(\d{4}) (\d{3})/, '$1 $2 ')
                             .replace(/(\d{4}) (\d{3}) (\d{3})/, '$1 $2 $3');
               
               setCustomerInfo({...customerInfo,mobile:{...customerInfo.mobile,value:mobile_number}})
               //if(!phoneRegex.test(value)){
              
          }else if (e.target.name==='notes'){
               setCustomerInfo({...customerInfo,notes:{...customerInfo.notes,value:e.target.value}})
          }else if(e.target.name==='diff_address'){
               setCustomerInfo({...customerInfo,diff_address:{...customerInfo.diff_address,value:!customerInfo.diff_address.value}})
          }else if(e.target.name==='term_agreement'){
               setCustomerInfo({...customerInfo,term_agreement:{...customerInfo.term_agreement,value:!customerInfo.term_agreement.value}})
          }
     }
     const customerHandleBlur = e =>{
          
          if(e.target.name === 'mobile'){
               const phoneRegex = /^\d{12}$/;
               //console.log("E:" +phoneRegex.test(value))
               //if(!phoneRegex.test(value)){
               //     setCustomerDetails({...customerDetails,mobile:{...customerDetails.mobile,value:e.target.value,error:"Mobile error"}})
               //}
          }else if(e.target.name == 'first_name'){
               //console.log('d')
               let rex2 = /^[A-Za-z\s?]+$/
               let message = null;
               if(e.target.value === '' || e.target.value.length == 0){
                    message = 'Cannot be empty';
               }else if(!rex2.test(e.target.value)){
                    message = 'Cannot contain nunbers or special characters';
               }
               setCustomerInfo({...customerInfo,first_name:{...customerInfo.first_name,error:message}});
          } else if(e.target.name == 'last_name'){
               let rex2 = /^[A-Za-z\s?]+$/
               let message = null;
               if(e.target.value === '' || e.target.value.length == 0){
                    message = 'Cannot be empty';
               }else if(!rex2.test(e.target.value)){
                    message = 'Cannot contain nunbers or special characters';
               }
               setCustomerInfo({...customerInfo,last_name:{...customerInfo.last_name,error:message}});
          }else{

          }

          
     }

     const cardHandleTextChange = e => {
          let { value, name } = e.target;
          if (name === 'card_name') {

          } else if (name === 'card_number') {
               let cardNumber = value;
               value = value.replace(/\D/g, '');
               if (/^3[47]\d{0,13}$/.test(value)) {
                    cardNumber = value
                         .replace(/(\d{4})/, '$1 ')
                         .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
               } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
                    // diner's club, 14 digits
                    cardNumber = value
                         .replace(/(\d{4})/, '$1 ')
                         .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
               } else if (/^\d{0,16}$/.test(value)) {
                    // regular cc number, 16 digits
                    cardNumber = value
                         .replace(/(\d{4})/, '$1 ')
                         .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
                         .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
               }
               setCard({ ...card, card_name: cardNumber });
          }
     }

     const handleTextChange1 = e => {
          /*
          if(e.target.id === 'expiry_date'){
          }else if(e.target.id === 'cvc'){
               setCvc(e.target.value);
          }
          */
          if (e.id === 'card_name') {

          } else if (e.target.id === 'card_number') {
               let value = e.target.value;
               console.log("text change:" + value);
               //setCard({ ...card, [e.target.id]: value })
               let v0 = value.substring(0, 4);
               let v1 = value.substring(4, 8);
               let v2 = value.substring(8, 12);
               let v3 = value.substring(12, 16);
               let v = `${v0} ${v1} ${v2} ${v3}`;
               
               setCard({ ...card, [e.target.id]: value })
          }


          //alert(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))
          /*
          let data = (e.target.value).split("");
          console.log(data)
          let cardExpirationDate = (data.map((x,index) => {
               return index ===  1 ? x+"/" : x
             })).join("");
          console.log(cardExpirationDate)
          */
          // console.log(e.target.value)
          //setExpDate(cardExpirationDate)
          //e.target.value = cardExpirationDate;
          //console.log(/^(0[1-9]|1[0-2])\/?([2-3][0-9]{3}|[0-9]{2})$/.test(cardExpirationDate))
          /*
            if(e.target.id === 'expiry_date'){
                 const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
                 if (e.target.value === "" || expRegex.test(e.target.value)) {
                      setExpDate(e.target.value );
                      //alert("Exp:"+ expDate)
                      //return true;
                 }
            }else if (e.target.id === 'cvc'){
                 const cvcRegex = /^\d{1,3}$/;
                 if (e.target.value === "" || cvcRegex.test(e.target.value)) {
                      setCvc(e.target.value);
                 }
            }
            */
         
         
        
     }

     const setCountryValue = (v) =>{
          console.log(JSON.stringify(v))
        ///  let { value, name } = e.target;
         if(v !== null){
               setCountryObject(v);
               setCustomerInfo({...customerInfo,dial_code:{...customerInfo.dial_code,value:v.dial_code}});
               setCustomerInfo({...customerInfo,country:{...customerInfo.country,value:v.name}});
               
         }
     }
     const submitOrder=()=>{
          if(customerInfo.term_agreement.value === false){
               setCustomerInfo({...customerInfo,term_agreement:{...customerInfo.term_agreement,error:'*required'}});
          }

          
     }


     return (
          <Container>
               <TopMenu>
                    <LogoSection><Logo /></LogoSection>
                    <UserMenu><Icons.UserSVGIcon /></UserMenu>
               </TopMenu>
               <Title>CHECKOUT</Title>
               <Description>(3 items)$288.00</Description>
               <div>&nbsp;</div>
               <Content>
                    <Row>
                         <BillingSection>
                              <s.Header1>BILLING DETAILS</s.Header1>
                              <s.Column2>
                                   <div>
                                        <s.LabelWrapper><s.LabelName>First name</s.LabelName><s.Asterick/></s.LabelWrapper>
                                        <div>
                                             <s.TextInput width={'280px'}  id="first_name" name="first_name" value={customerInfo.first_name.value}
                                             onBlur={customerHandleBlur}
                                             onChange={e=>setCustomerInfo({...customerInfo,first_name:{...customerInfo.first_name,value:e.target.value}})}/>
                                             {customerInfo.first_name.error && <s.ErrorMessage>{customerInfo.first_name.error}</s.ErrorMessage>}
                                        </div>
                                   </div>
                                   <div style={{ marginLeft: '5px' }}>
                                        <s.LabelWrapper><s.LabelName>First name</s.LabelName><s.Asterick/></s.LabelWrapper>
                                        <div>
                                             <s.TextInput width={'280px'} id='last_name' name='last_name' value={customerInfo.last_name.value}
                                              onBlur={customerHandleBlur}
                                              onChange={e=>setCustomerInfo({...customerInfo,last_name:{...customerInfo.last_name,value:e.target.value}})}/>
                                              {customerInfo.last_name.error && <s.ErrorMessage>{customerInfo.last_name.error}</s.ErrorMessage>}
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Company name (optional)</div>
                                        <div>
                                             <s.TextInput width={'560px'} id='company_name' name='company_name' placeholder={'House number and street name'} 
                                             onChange={e=>setCustomerInfo({...customerInfo,company_name:{...customerInfo.company_name,value:e.target.value}})}
                                             />
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <s.LabelWrapper><s.LabelName>Street address</s.LabelName><s.Asterick/></s.LabelWrapper>
                                        <div>
                                             <s.TextInput width={'560px'} id='street_address' name='street_address' placeholder={'Aparment, suit unit, etc (optional)'} 
                                             onChange={e=>setCustomerInfo({...customerInfo,street_address:{...customerInfo.street_address,value:e.target.value}})}/>
                                             {customerInfo.street_address.error && <s.ErrorMessage>{customerInfo.street_address.error}</s.ErrorMessage>}
                                             
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Suburb *</div>
                                        <div>
                                             <s.TextInput id="surburb" name="suburb" width={'560px'} 
                                             onChange={e=>setCustomerInfo({...customerInfo,suburb:{...customerInfo.suburb,value:e.target.value}})}
                                             />
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>State *</div>
                                        <div>
                                             <s.TextInput width={'560px'} id="state" name="state"
                                             onChange={e=>setCustomerInfo({...customerInfo,state:{...customerInfo.state,value:e.target.value}})}/>
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Postcode *</div>
                                        <div>
                                             <s.TextInput width={'560px'} id="postcode" name="postcode"
                                              onChange={e=>setCustomerInfo({...customerInfo,postcode:{...customerInfo.postcode,value:e.target.value}})}/>
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Country *</div>
                                        <CountryDropdown options={countries} value={countryObject || ''} onChange={(e) => setCountryValue(e)}/>
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Dial Code *</div>
                                        <div><s.TextInput width={'160px'} defaultValue={customerInfo.dial_code.value} readOnly/></div>
                                   </div>
                                   <div>
                                        <div>Mobile Number*</div>
                                        <div><s.TextInput maxLength={12} placeholder="XXXX XXX XX" width={'260px'} id="mobile" name="mobile" value={customerInfo.mobile.value}
                                              onBlur={customerHandleBlur}
                                              onChange={customerHandleTextChange}
                                              onKeyDown={(e) =>{
                                                  if (!/\d/.test(e.key)  && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
                                                       e.preventDefault();
                                                  }}
                                             }
                                              />
                                        </div>
                                        {customerInfo.mobile.error !== '' && <div style={{color:'red',fontSize:'10px'}}>{customerInfo.mobile.error}</div>}
                                   </div>
                              </s.Column2>
                              <s.Column2>
                                   <div>
                                        <div>Email address *</div>
                                        <div>
                                             <s.TextInput name='email_address' id='email_address' width={'560px'} onChange={customerHandleTextChange}
                                             onBlur={(e)=>{
                                                  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                                  if(regex.test(e.target.value)){
                                                       console.log("valid")
                                                  }else{
                                                       console.log("invalid")
                                                  }
                                             }}
                                             />
                                        </div>
                                   </div>
                              </s.Column2>
                              <s.Column3>
                                   <div style={{ width: '560px' }}>
                                        <div style={{ float: 'left' }}>SHIP TO DIFFERENT ADDRESS?</div>
                                        <div style={{ float: 'right' }}>
                                             <label className={styles.custom_checkbox}>
                                                  <input type="checkbox" id="diff_address" name="diff_address" checked={customerInfo.diff_address.value}  onClick={customerHandleTextChange}/>
                                                  <span></span>
                                             </label>
                                        </div>
                                   </div>
                              </s.Column3>
                              <s.Column2>
                                   <div>
                                        <div>Order notes (Optional)</div>
                                        <div><s.TextArea id="notes" name="notes" rows={5} value={customerInfo.notes.value} 
                                        placeholder='Notes about your order, e.g special notes for delivery.' 
                                        onChange={customerHandleTextChange}
                                        /></div>
                                   </div>
                              </s.Column2>
                         </BillingSection>
                         <OrderSection>
                              <s.OrderHeader>YOUR ORDER</s.OrderHeader>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold' background='#ccc'>ITEM</s.ItemHeader><s.ItemPrice1 fontWeight='bold' background='#ccc'>PRICE</s.ItemPrice1>
                              </s.OrderRow>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.ItemHeader>API Test Kit x 1</s.ItemHeader><s.ItemPrice1>$212.00</s.ItemPrice1>
                              </s.OrderRow>
                              <s.OrderRow>
                                   <s.ItemHeader>Aqua One Sponge x 2</s.ItemHeader><s.ItemPrice1>$212.00</s.ItemPrice1>
                              </s.OrderRow>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>SUBTOTAL</s.ItemHeader><s.ItemPrice1 fontWeight='bold'>424.00</s.ItemPrice1>
                              </s.OrderRow>
                              <div>&nbsp;</div>

                              <s.OrderRow>
                                   <s.ShippingHeader>SHIPPING</s.ShippingHeader>
                                   <s.ItemHeader fontWeight='bold'><RadioGroup>
                                        <RadioButton
                                             id="shipping"
                                             name="shipping"
                                             value="on"
                                             labelText="Flat Rate"
                                             checked={customerInfo.shipping.value === "shipping"}
                                             onChange={handleRadioChange}
                                        />
                                        <RadioButton
                                             id="local_pickup"
                                             name="local_pickup"
                                             value="off"
                                             labelText="Local Pick-Up Only"
                                             checked={customerInfo.shipping.value=== "local_pickup"}
                                             onChange={handleRadioChange}
                                        />
                                   </RadioGroup></s.ItemHeader>
                                   <s.ItemPrice fontWeight='bold'>
                                        $10.50
                                   </s.ItemPrice>
                              </s.OrderRow>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>GIFT CARD</s.ItemHeader><s.ItemPrice fontWeight='bold'>Apply Gift Card</s.ItemPrice>
                              </s.OrderRow>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>TOTAL</s.ItemHeader><s.ItemPrice fontWeight='bold'>424.00</s.ItemPrice>
                              </s.OrderRow>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>Pay in 4 interest-free payments of $8.99 with Paypal. Learn more</s.ItemHeader><s.ItemPrice fontWeight='bold'></s.ItemPrice>
                              </s.OrderRow>
                              <div>&nbsp;</div>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>
                                        <Radio name="test">Cards</Radio>
                                   </s.ItemHeader>
                                   <s.ItemPrice fontWeight='bold'>
                                        <AllTypes/>
                                   </s.ItemPrice>
                              </s.OrderRow>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.Column2>
                                        <div>
                                             <div>CARD HOLDER NAME *</div>
                                             <div>
                                                  <s.TextInput width={'560px'} defaultValue={card.card_name} name="card_name" id="card_name" onChange={cardHandleTextChange} 
                                                  onKeyDown={(e) =>{
                                                       if (/[^a-zA-Z\s]+/.test(e.key) && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
                                                            e.preventDefault();
                                                       }}
                                                  }
                                                  />
                                             </div>
                                        </div>
                                   </s.Column2>
                              </s.OrderRow>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.Column2>
                                        <div>
                                             <div>CREDIT CARD NUMBER</div>
                                             <div>
                                                  <s.TextInput width={'560px'} id='card_number' name="card_number" value={card.card_name} maxLength={19} placeholder="XXXX XXXX XXXX XXXX" onChange={cardHandleTextChange}
                                                       onKeyDown={(e) => {
                                                            console.log(e.key)
                                                            if (!/\d/.test(e.key) && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
                                                                 e.preventDefault();
                                                            }
                                                       }}
                                                       onKeyUp={(e) => {
                                                            if (e.key === 'Backspace') {
                                                                 setCard({ ...card, card_name: card.card_name.trim() })

                                                            }
                                                       }}
                                                  />
                                             </div>
                                        </div>
                                   </s.Column2>
                              </s.OrderRow>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.Column2>
                                        <div>
                                             <div>EXPIRY DATE *</div>
                                             <div className={styles.month_year}>
                                                  <select name="cars" id="cars" style={{fontSize:'1.2em'}}>
                                                       <option value="volvo">MONTH</option>
                                                       <option value="saab">02</option>
                                                       <option value="mercedes">03</option>
                                                       <option value="audi">04</option>
                                                  </select>
                                                  <div style={{ width: '20px', textAlign: 'center', fontWeight: 'bold',marginTop:'5px' }}>/</div>
                                                  <select name="cars" id="cars" style={{fontSize:'1.2em'}}>
                                                       <option value="volvo">YEAR</option>
                                                       <option value="saab">2026</option>
                                                       <option value="mercedes">2027</option>
                                                       <option value="audi">2028</option>
                                                  </select>
                                             </div>
                                        </div>
                                   </s.Column2>
                                   <s.Column2>
                                        <div>
                                             <div>CVV</div>
                                             <div style={{ display: 'relative', marginBottom: '40px' }}>
                                                  <s.TextInput width={'250px'} maxLength={3} style={{ position: 'absolute' }} placeholder="XXX" onChange={cardHandleTextChange} id="cvc" defaultValue={cvc}
                                                       onKeyDown={(e) => {

                                                            if (!/[1-9]/.test(e.key) && (e.key !== 'Backspace') && (e.key !== 'Delete')) {
                                                                 e.preventDefault();
                                                            }
                                                       }} />
                                                  <div style={{ position: 'absolute' }}>
                                                       < CreditCardCvc zindex={5} />
                                                  </div>
                                             </div>
                                        </div>
                                   </s.Column2>
                              </s.OrderRow>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>
                                        <Radio name="test1">PayPal/Credit Card/Debit Card</Radio>
                                   </s.ItemHeader>
                                   <s.ItemPrice >
                                        <PayPal/>
                                   </s.ItemPrice>
                              </s.OrderRow>

                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>
                                        <Radio name="test1">Afteryay</Radio>
                                   </s.ItemHeader>
                                   <s.ItemPrice>
                                        <AfterPay/>
                                   </s.ItemPrice>
                              </s.OrderRow>
                             
                              <s.OrderRow>
                                   <s.ItemHeader fontWeight='bold'>
                                        <Radio name="test1">Zip it now, pay later</Radio>
                                   </s.ItemHeader>
                                   <s.ItemPrice fontWeight='bold'>
                                        <ZipItNow/>
                                   </s.ItemPrice>
                              </s.OrderRow>
                              <s.Space/>
                              <s.Space/>
                              <s.OrderRow>
                                   <s.TermAndConditon fontWeight='bold'>
                                   Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                   </s.TermAndConditon>
                                   
                              </s.OrderRow>
                              <s.Space/>
                              <s.Space/>
                              <s.OrderRow>
                              <s.TermAndConditon fontWeight='bold'>
                                   <label className={styles.custom_checkbox1}>
                                                  <input type="checkbox" id="term_agreement" name="term_agreement" checked={customerInfo.term_agreement.value}  onClick={customerHandleTextChange}/>
                                                  <span></span>
                                                  &nbsp;&nbsp;I have read and agree to the website terms and conditions *
                                                  <br/>
                                                  {customerInfo.term_agreement.error && <s.ErrorMessage>{customerInfo.term_agreement.error}</s.ErrorMessage>}
                                   </label>
                                   
                              </s.TermAndConditon>
                              
                              </s.OrderRow>
                              <s.Space/>
                              <s.Space/>
                              <s.Space/>
                              <s.Space/>
                              <s.OrderRow>
                                         <s.PlaceOrdeButton onClick={submitOrder}>Place Order</s.PlaceOrdeButton>
                                  
                              </s.OrderRow>
                         </OrderSection>
                    </Row>
               </Content>

          </Container>

     )
}
export default Checkout;