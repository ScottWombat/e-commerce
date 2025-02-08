import React,{useState,useEffect} from "react";
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import {updateTermsConditions} from '../../store/checkout/checkoutReducer'
import styled from 'styled-components';
import * as styles from './index.module.css';

const Asterik = styled.div`
  color:#ff0000;
  float:left;
  margin-left:5px;
`;
const Asterik1 = styled.div`
  color:#ff0000;
 
`;

export const ErrorMessage = styled.div`
    padding: 0px;
    color: #ff0000;
    &:after{
      content:"is Required *"
    }
`;

const ShowMessage = (props)=>{
    let show = props.show;
    if (show){
      return (<><div>&nbsp;</div><div style={{marginTop:'15px',marginBottom:'15px'}}><ErrorMessage/></div></>);
    }else{
      return (<><div>&nbsp;</div><div>&nbsp;</div></>);
    }
}

const TermConditions = ()=>{
     const dispatch = useAppDispatch();
    //const [showConsentMessage,setShowConsentMessage] = useState(false);
    //const [showAgreeMessage,setShowAgreeMessage] = useState(false);
   // const [consentChecked ,setConsentChecked] = useState(props.consent.checked)
   // useEffect(() => {
      ///console.log("term")
     // console.log(props)
      //setShowConsentMessage(props.consent.show_message);
     // setShowAgreeMessage(props.agree.show_message);
  // },[props]);

    const onClick=(e)=>{
      dispatch(updateTermsConditions({name:e.target.name,selected:e.target.checked}))
    }
    return(
      <>
      <div className={styles.wrapper}>
         <div>
            <input className={styles.checkbox1} 
            type="checkbox" 
            id='billing'
            name='billing'
            onClick={onClick}
            />
          </div>
          <div>My billing and delivery information are the same.</div>
          <div>&nbsp;</div><div>&nbsp;</div>
          <div>
            <input className={styles.checkbox1} 
            type="checkbox"
            id='legalage'
            name='legalage'
            onChange={(e) =>onClick(e)}/>
          </div>
          <span><div style={{float:'left'}}>I'm 18+ years old.</div><Asterik>*</Asterik></span>
          <ShowMessage show={false}/>
          <div>
            <input className={styles.checkbox1} 
            type="checkbox" 
            id='notify'
            name='notify'
            onChange={(e) =>onClick(e)}/>
          </div>
          <div>I agree to receive news, promotions, information regarding adidas’ brand, products, activities and events, and any other marketing communications and materials by e-mail, sms, in-app notification and/or telephone from Adidas Australia Pty Ltd. and runtastic GmbH pursuant to the adidas Privacy Policy.HOW?</div>
          <div>&nbsp;</div><div>&nbsp;</div>
          <div>
            <input className={styles.checkbox1} 
            type="checkbox"
            id='agree'
            name='agree'
            onChange={(e) =>onClick(e)}/>
          </div>
          <p>
            <label>
            <span></span>
             <span className={styles.labeltext}>I understand and agree that in certain circumstances, my personal information may be transferred to other entities in the adidas Group and service providers that are located in countries that do not have comparable privacy safeguards to Australia.</span>
            </label>
          </p>
          <ShowMessage show={false}/>
      </div>
      </>
    );

    
}
export default TermConditions;