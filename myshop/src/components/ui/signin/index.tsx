import React, { useState, useEffect, useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FormInput from 'src/components/ui/form-input';
import CustomButton from 'src/components/ui/custom-button';
import IUser from 'src/components/interfaces/user';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    StyledAlert
  } from './signin.styles';
import { FormContainer } from 'src/components/ui/form-input/form-input.styles';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [state, setState] = useState({
      email: '',
      password: '',
    });
    
    const handleEmailChange = (event:any) => setEmail(event.target.value);
    const handlePasswordChange = (event:any) => setPassword(event.target.value);

    const validateEmail = (email:any) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const handleSubmitClick = (e:any) => {
      e.preventDefault();
      console.log('dd');
      if (!validateEmail(state.email)) {
        setError('Invalid Email');
      }
  
      if (state.password.length < 8) {
        console.log("invalidpass")
        setError('Password must be at least 8 chars long');
      }
  
      if (!error) {
        setState({email: state.email,password: state.password})
      }
    };

    const handleSubmit = (e:any) => {
      e.preventDefault();
      //const { email, password } = this.state;
      try {
       // await signInWithEmailAndPassword({email}, {password});
        setEmail('');
        setPassword('');
        //this.setState({
        //  email: '',
        //  password: ''
        //});
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        {error && <StyledAlert>Password is invalid.</StyledAlert>}
        <form onSubmit={handleSubmitClick}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={email}
            handleChange={handleEmailChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            label='password'
            handleChange={handlePasswordChange}
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit' disabled={error}> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
}
    

export default SignIn;