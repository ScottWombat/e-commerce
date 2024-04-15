
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import React, { useState} from "react";
import styles from './member-login.module.css';
import Logo from 'src/components/ui/logo';
import { setMember } from 'src/store/member/memberReducer';
import { useAppDispatch } from 'src/store/hooks';
interface ErrorMessageProps{
    isError: boolean;
    
  }
const ErrorMessage = styled.div<ErrorMessageProps>`
grid-area: label;
color: red;
font-size: 12px;
display:${ props => props.isError? 'block' : 'none'};
`;
const MemberLogin = () =>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [showError,setShowError] = useState(false);
    const [user,setUser] = useState({isMember:false,email:''})
    const handleSubmit = (e) =>{
        e.preventDefault();
        //setShowError(false);
        //alert(e.target.value)
        dispatch(setMember(user))
        let path = `/create_account`; 
        navigate(path);
    } 
    const handleChange = (e) =>{
        let email = e.target.value;
        let validEmail = validateEmail(email)
        if(validEmail){
            setShowError(false);
        }else{
            e.target.value=''
            setShowError(true);
        }
       
        setUser({isMember:false,email:email})
      
    }
    const validateEmail =(email) =>{
		const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return reg.test(email);
	}
    return(
        <div className={styles.member_wrapper}>
            <form method="post" onSubmit={handleSubmit}>
            <div className={styles.header}>
               <Logo/>
            </div>
            <div className={styles.label}>
            Enter your email to join us or sign in.
            </div>
            <div className={styles.input_field}>
            <input type="email" required onBlur={handleChange}/>
            <label>Enter email</label>
            </div>
            <ErrorMessage isError={showError}>
                required*
            </ErrorMessage>
            <div className={styles.privacy_text}>
            By continuing, I agree to Nike's Privacy Policy and Terms of Use.
            </div>
            <div className={styles.member_button}>
            <button className={styles.round}>Continue</button>
            </div>
            
            </form>
        </div>
    );
}
export default MemberLogin;