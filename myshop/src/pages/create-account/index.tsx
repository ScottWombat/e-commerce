import React, { useMemo, useRef, useState, useEffect } from "react";
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import styled from "styled-components";
import { type_options } from 'src/data';
import Select from './select';
import { Button, Form } from 'src/styled/form-styled';
import styles from './create-account.module.css';
import Logo from "src/components/svg/logo";
import StyledLink from 'src/styled/styled-link';
import RefreshIcon from 'src/components/svg/refresh';
import EyeIcon from 'src/components/svg/eye';
import EyeoffIcon from 'src/components/svg/eye-off';
import Button1 from "src/components/form/button";
import Input from 'src/components/form/input';
import Label1 from 'src/components/form/label';
import validate_field from "src/utils/field-validation";
import css_checkbox from './checkbox.module.css';
import { userRegister } from "src/store/signup/signupReducer";
import UserData from "src/types/user_data";
const options = [
  { value: '', label: 'Select' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const CreateAccount = (props: any) => {
  const dispatch = useAppDispatch();
  const codeInputRef = useRef(null);
  const codeLabelRef = useRef(null);
  const firstnameInputRef = useRef(null);
  const firstnameLabelRef = useRef(null);
  const surnameInputRef = useRef(null);
  const surnameLabelRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordLabelRef = useRef(null)
  const dobLabelRef = useRef(null);
  const dobInputRef = useRef(null)
  const shopPrefRef = useRef(null)


  const [value, setValue] = useState('')
  const [move, setMove] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [isError,setIsError] = useState(true);
  const [shopErr, setShopErr] = useState(false);

  const [animatedLabel, setAnimatedLabel] = useState({
    code: false,
    firstname: false,
    surname: false,
    password: false,
    shopPref: false,
    dob: false
  })

  const [errors, setErrors] = useState({
    CODE: [],
    FIRSTNAME: [],
    SURNAME: [],
    PASSWORD: [],
    SHOP: [],
    DOB: []
  });
  const [formData1, setFormData1] = useState({});
  /*
  const [formData, setFormData] = useState({
    code: '',
    firstname: '',
    surname: '',
    password: '',
    shopPref: '',
    dob: '',
    register: false,
    aggrement: false
  });
  */

  
  const onSubmit = (e) => {
    e.preventDefault();

  
    formData1['email'] = 'revit@gmail.com';
    formData1['firstname'] = e.target.firstname.value;
    formData1['surname'] = e.target.surname.value;
    formData1['password'] = e.target.password.value;
    formData1['dob'] =e.target.dob.value;
    formData1['subscribed'] = e.target.signup.checked?true:false;
  
    if(e.target.shopPref.value===''){
      setErrors({...errors,SHOP:['*SHOP PREFERENCE => required']})
      return;
    }else{
      formData1['preference'] = e.target.shopPref.value;
    }
    
    //errors.CODE =['dd']
    //setErrors(errors)
    console.log('errors1')
    console.log(errors)
    console.log(formData1)
    let data ={
      email: "revit@gmail.com",
      password: "dddd"
    }
    let userData:UserData ={
      email: 'Revitfffff',
      password: 're',
      firstname: 'd',
      surname: 'd',
      dob: '02/02/2000',
      preference: 'd',
      enabled: true,
      subscribed: true
    }
    //const test =userRegister(userData)
    dispatch(userRegister(userData))
  }
 

  /*  event */
  const iconOnClick = (e) => {
    setRevealPassword(!revealPassword);
    
  }
  const shopPrefOnBlur = (e) => {
    e.preventDefault();
    //alert('ddd')
    if (errors.SHOP.length === 0) {
      setShopErr(false)
    } else {
      setShopErr(true)
    }
    console.log("shop err change")
  }

  const shopPrefLabelOnClick = (e) => {

    if (e.target.value !== '') {
      setMove(true);
    } else {
      setMove(false);
    }
  }

  const shopPrefOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setMove(true)
    let errs = validate_field(name, value)
    errors.SHOP = errs;
    setErrors(errors)
  
  }
  const labelOnClick = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    switch (id) {
      case 'label_code':
        setAnimatedLabel({...animatedLabel,code:true})
        codeInputRef.current.focus();
        break;
      case 'label_firstname':
        setAnimatedLabel({...animatedLabel,firstname:true});
        firstnameInputRef.current.focus();
        break;
      case 'label_surname':
        setAnimatedLabel({...animatedLabel,surname:true});
        surnameInputRef.current.focus();
        break;
      case 'label_password':
        setAnimatedLabel({...animatedLabel,password:true});
        passwordInputRef.current.focus();
        break;
      case 'label_dob':
        setAnimatedLabel({...animatedLabel,dob:true});
        dobInputRef.current.focus();
        break;
      case 'SHOP_PREF':
        shopPrefRef.current.focus();
        break;
      default:
        break;
    }
  }

  const inputOnBlur1 = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errs = validate_field(name, value)
    errs.length===0?setIsError(false):setIsError(true);
    setErrors({ ...errors,[name]: errs})
   
  }
  
  const dateOnChange = (e) =>{
    e.preventDefault();
    var val = e.target.value;
      if (val.length === 2) {
        val += '/';
      } else if (val.length === 5) {
        val += '/';
      }
      setValue(val);
  }

  const dateOnKeydown = (e) =>{
    if(e.which === 8) {
      if(value.length == 3 || value.length == 6) {
          let val = value.slice(0, value.length-1);
          setValue(val)
      }
    }
  }

  return (
    <form onSubmit={onSubmit} >
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo />love me sexy
        </div>
        <div className={styles.row}>
          <div style={{ marginBottom: '5px' }}>Now let's make you a LoveMeSexy member.</div>
        </div>
        <div className={styles.row}>
          <div className={styles.text_box}>
            <label ref={codeLabelRef} id='label_code' htmlFor="code" onClick={labelOnClick} className={animatedLabel.code ? styles.active : styles.label}>Code</label>
            <input className={styles.floating_input} id='code' name="CODE" ref={codeInputRef} type="text"  onBlur={inputOnBlur1}/>
            <StyledLink to='/guest_login'>
              <RefreshIcon color={'black'}/>
            </StyledLink>
          </div>
        </div>
        {errors.CODE && (<div className={styles.row}>
          <ul style={{ color: 'red', fontSize: '12px' ,padding:'0', margin:'0'}}>
            {errors.CODE.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>)}
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.text_box}>
              <label ref={firstnameLabelRef} htmlFor="firstname" id="label_firstname" onClick={labelOnClick} className={animatedLabel.firstname ? styles.active : styles.label}>First Name</label>
              <input ref={firstnameInputRef} className={styles.floating_input} id="firstname" name="FIRSTNAME" type="text"  onBlur={inputOnBlur1} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.text_box}>
              <label ref={surnameLabelRef} htmlFor="surname" id="label_surname" onClick={labelOnClick} className={animatedLabel.surname ? styles.active : styles.label}>Surname</label>
              <input ref={surnameInputRef} className={styles.floating_input} id="surname" name="SURNAME" type="text" onBlur={inputOnBlur1} />
            </div>
          </div>
        </div>
        {(errors.FIRSTNAME.length === 1 || errors.SURNAME.length === 1) && (<div className={styles.row}>
          <div className={styles.left}>
          <ul style={{ padding: '0', color: 'red', fontSize: '14px' }}>
            {errors.FIRSTNAME.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          </div>
          <div className={styles.right}>
          <ul style={{ padding: '0', color: 'red', fontSize: '14px' }}>
            {errors.SURNAME.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
          </div>
        </div>)}
        <div className={styles.row}>
          <div className={styles.text_box}>
            <label ref={passwordLabelRef} id="label_password" htmlFor="password" onClick={labelOnClick} className={animatedLabel.password ? styles.active : styles.label}>Password</label>
            <input ref={passwordInputRef} className={styles.floating_input} name='PASSWORD' id='password' onBlur={inputOnBlur1} type={revealPassword?'text':'password'}/>
            <div className={styles.icon} onClick={iconOnClick}>
              {revealPassword ? <EyeIcon /> : <EyeoffIcon />  }
            </div>
          </div>
        </div>

        {errors.PASSWORD.length > 0 && (<div className={styles.row}>
          <ul style={{ padding: '0', color: 'red', fontSize: '12px' }}>
            {errors.PASSWORD.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>)}
        <div className={styles.row}>
          <div className={styles.text_box}>
          <Select ref={shopPrefRef} name='SHOP_PREF' id='shopPref' options={options} shopPrefOnChange={shopPrefOnChange} label={'Shopping Preference'} move={move} shopPrefLabelOnClick={shopPrefLabelOnClick} />
          </div>
        </div>

        {errors.SHOP.length === 1 && (<div className={styles.row}>
          <ul style={{ padding: '0', color: 'red', fontSize: '14px' }}>
            {errors.SHOP.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </div>)}
        <div className={styles.row}>
          <div className={styles.text_box}>
          <label ref={dobLabelRef} id="label_dob" htmlFor="dob" onClick={labelOnClick} className={animatedLabel.dob ? styles.active : styles.label}>Date of Birth</label>
            <input placeholder={"DD/MM/YYYY"}
            type="text"
            onChange = {dateOnChange} 
            onKeyDown={dateOnKeydown}
            onBlur={inputOnBlur1}
            ref={dobInputRef} className={styles.floating_input} id='dob' name="DOB" value={value}/>
          </div>
        </div>

        {errors.DOB.length > 0 && (<div className={styles.row}>
          <ul style={{ padding: '0', color: 'red', fontSize: '12px' }}>
            {errors.DOB.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </div>)}
        <div className={styles.row}>
          <div>Get a LoveMeSexy Member Reward on your birthday.</div>
        </div>
        <div className={styles.row}>
          <div className={css_checkbox.container}>
            <div>
              <input className={css_checkbox.checkbox} id="signup" name="signup" type="checkbox"/>
            </div>
            <div className={css_checkbox.info}>
              Sign up for emails to get updates from LoveMeSexy on products, offers and your Member benefits.
            </div>
          </div>
        </div>
        <br />
        <div className={styles.row}>
          <div className={css_checkbox.container}>
            <div>
              <input id="policy" name="policy" type="checkbox" className={css_checkbox.checkbox}/>
            </div>
            <div className={css_checkbox.info}>
              I agree to LoveMeSexy Private Policy and Terms of Use
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.submit}><Button1 disabled={isError} label="Submit" /></div>
        </div>
      </div>

    </form>

  )


}

export default CreateAccount;