import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import styles from './create-account.module.css';
import Logo from 'src/components/ui/logo';
import { email } from 'src/store/member/memberReducer'
import RefreshIcon from 'src/components/svg/refresh';
import EyeIcon from 'src/components/svg/eye';
import EyeoffIcon from 'src/components/svg/eye-off';
import CalendarIcon from 'src/components/svg/calendar';
import { Link } from 'react-router-dom';
import StyledLink from 'src/styled/styled-link';
import { reverse } from 'dns';
import { SelectInput, LabelText, TextBox1, LabelText1, InputWrapper, SubmitButton } from './create-account.styled'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'
const CreateAccount = () => {
    const dispatch = useAppDispatch();
    const user_email = useAppSelector(email);
    const [revealPassword, setRevealPassword] = useState(false)
    const [category, setCategory] = useState('New york');
    const [blur, setBlur] = useState(false);
    const [currentDate, setCurrentDate] = useState(dayjs())
    useEffect(() => {
        // Run! Like go get some data from an API.
        console.log(`Email:${user_email}`)

    });
    const iconClick = (e) => {
        e.preventDefault();
        setRevealPassword(!revealPassword)
    }
    const onClick = (e) => {
        e.preventDefault();

        if (e.target.value === 'dummy') {

            //setBlur(false);
        }
    }
    const onChange = (e) => {
        e.preventDefault();

        if (e.target.value === 'dummy') {

            setBlur(true);
        }
        setCategory(e.target.value)
    }
    const onBlur = (e) => {
        e.preventDefault();

        setBlur(true);
    };

    const onDateChanged = (d) => {
        setCurrentDate(d)
    }
    const options = [
        { value: 'dummy', label: '' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
        <div className={styles.create_account_wrapper}>
            <div className={styles.element1}>
                <Logo />
            </div>
            <div className={styles.element2}>
                Now let's make you a Nike Member.
            </div>
            <div className={styles.element3}>
                We've sent a code to
            </div>
            <div className={styles.element4}>
                {user_email}<a>Edit</a>
            </div>
            <div className={styles.element5}>
                <input className={styles.input_field + ' ' + styles.medium} type="text" />
                <StyledLink to='/guest_login'>
                    <RefreshIcon />
                </StyledLink>
            </div>
            <div className={styles.element6}>
                <div className={styles.left}>
                    <input className={styles.input_field + ' ' + styles.short} type="text" id='d1' /><br />
                </div>
                <div className={styles.right}>
                    <input className={styles.input_field + ' ' + styles.short} type="text" id='d2' />
                </div>
            </div>
            <div className={styles.element7}>
                <input className={styles.input_field + ' ' + styles.medium} type={
                    revealPassword ? "text" : "password"
                } />
                <div className={styles.icon} onClick={iconClick}>
                    {revealPassword ? <EyeoffIcon /> : <EyeIcon />}
                </div>
            </div>
            <div className={styles.element8}>
                <div className={styles.did_floating_label_content}>
                    <SelectInput onBlur={onBlur} onChange={onChange} onClick={onChange}>
                    {options.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                    </SelectInput>
                    <LabelText blur={blur}>Select Country</LabelText>
                    <InputWrapper>
                        <TextBox1 placeholder=" " />
                        <LabelText1>Select</LabelText1>
                    </InputWrapper>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker format="DD/MM/YYYY" value={currentDate} onChange={onDateChanged} />
                </LocalizationProvider>
                <div>Get a Nike Member Reward on your birthday</div>
                <label>
                    <input type="checkbox" />
                    Sign up emails to get updates from Nikeon products,offer and your Nember benefits
                </label>
                
                <br />
                <label>
                    <input type="checkbox" id="horns1" name="horns1" />
                    I aggree to Nike s Privacy Policy and Term of Use.
                </label>
                <SubmitButton>Create Account</SubmitButton>
            </div>


        </div>
    );
}
export default CreateAccount;