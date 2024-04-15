import React, { useMemo, useState } from "react";
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
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//////import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import BugReportIcon from "@mui/icons-material/BugReport";

import css_checkbox from './checkbox.module.css';

const options = [
  { value: 'dummy', label: 'Select' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const CreateAccount = (props) => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [move, setMove] = useState(false)
  const [revealPassword, setRevealPassword] = useState(false)
  const [animatedLabel, setAnimatedLabel] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    first_name: "",
    last_name: "",
    password: "",
    preference: "",
    dob: "",
    signup_mailinglist: false,
    agree_policy: false,
    errors: {},
  });
  const onChange = (e) => {
    //e.preventDefault();
    //console.log('handle onchage')
    setValue(e.target.value)
  }
  const onBlur = (e) => {
    e.preventDefault();
  }
  const onClick = (e) => {
    //e.preventDefault();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  const validateForm = () => {
    const errors = { code: '', preference: '' };

    // Check if username is empty
    if (!formData.code) {
      errors.code = "Code is required";
    }

    // Check if password is empty
    if (!formData.preference) {
      errors.preference = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const labelClick = (e) => {
    setAnimatedLabel(true);
  }
  const inputOnBlur = (e) => {
    if (e.target.value === '') {
      setAnimatedLabel(false);
    }

  }

  const onShopPrefClick = (e) => {
    if(e.target.value !== 'dummy'){
      setMove(true);
    }else{
      setMove(false);
    }
  }

  return (
    <form onSubmit={onSubmit} >
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo />love me sexy
        </div>
        <div className={styles.row}>
          <div style={{marginBottom:'5px'}}>Now let's make you a LoveMeSexy member.</div>
        </div>
        <div className={styles.row}>
          <div className={styles.text_box}>
            <label htmlFor="input" onClick={labelClick} className={animatedLabel ? styles.active : styles.label}>Code</label>
            <input id="input" type="text" onFocus={labelClick} onBlur={inputOnBlur} />
            <StyledLink to='/guest_login'>
              <RefreshIcon />
            </StyledLink>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.text_box}>
              <label htmlFor="input" onClick={labelClick} className={animatedLabel ? styles.active : styles.label}>First Name</label>
              <input id="input" type="text" onFocus={labelClick} onBlur={inputOnBlur} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.text_box}>
              <label htmlFor="input" onClick={labelClick} className={animatedLabel ? styles.active : styles.label}>Surname</label>
              <input id="input" type="text" onFocus={labelClick} onBlur={inputOnBlur} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.text_box}>
            <label htmlFor="input" onClick={labelClick} className={animatedLabel ? styles.active : styles.label}>Password</label>
            <input id="input" type="text" onFocus={labelClick} onBlur={inputOnBlur} />
            <div className={styles.icon} onClick={labelClick}>
                    {revealPassword ? <EyeoffIcon /> : <EyeIcon />}
              </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.text_box}>
          <Select options={options} callback={onShopPrefClick} label={'Shopping Preference'} move={move} onLabelClick={onShopPrefClick}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.text_box}>
            <label htmlFor="input" onClick={labelClick} className={animatedLabel ? styles.active : styles.label}>Date of Birth</label>
            <input id="input" type="date" onFocus={labelClick} onBlur={inputOnBlur} />
          </div>
        </div>
        <div className={styles.row}>
          <div>Get a LoveMeSexy Member Reward on your birthday.</div>
        </div>
        <div className={styles.row}>
          <div className={css_checkbox.container}>
            <div>
            <input type="checkbox" value="0000" className={css_checkbox.checkbox}/>
            </div>
            <div className={css_checkbox.info}>
            Sign up for emails to get updates from LoveMeSexy on products, offers and your Member benefits.
            </div>
          </div>
        </div>
        <br/>
        <div className={styles.row}>
          <div className={css_checkbox.container}>
            <div>
            <input type="checkbox" value="00001" className={css_checkbox.checkbox}/>
            </div>
            <div className={css_checkbox.info}>
            I agree to LoveMeSexy Private Policy and Terms of Use
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.submit}><Button>Submit</Button></div>
        </div>
      </div>

    </form>

  )


}

export default CreateAccount;