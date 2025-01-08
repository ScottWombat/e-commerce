
import React,{ ChangeEvent, forwardRef, HTMLInputTypeAttribute } from  "react";
import { IMaskInput } from 'react-imask';
import IMask from "imask";
import * as styles from './index.module.css';
interface  TextInputProps {
    handleChange?: (e: ChangeEvent<HTMLInputElement>) =>  void;
    onComplete?: (v) => void;
    doFlip?: (v) => void;
    name?: string;
    id?:string;
    type?: HTMLInputTypeAttribute;
    className?:any;
}

export const ExpiryDateMask = forwardRef<HTMLInputElement, TextInputProps>(
  ({ handleChange, name, type,id }, ref) => {
    //return <input  onChange={handleChange}  name={name}  type={type}  ref={ref}  />;
    return (<IMaskInput
       id={id}
       onChange={handleChange}
       name={name}
       type={type}
       inputRef={ref}
       unmask={true}
       className={styles.txt}
       onAccept={(value) => {
         //setFieldValue(props.name, value);
       }}
       mask="MM/YY"
       blocks={{
        YY: {
          mask: "00"
        },
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12
        }
        }}
        placeholder="MM/YY"
     />
   );
   
});

const cvc_masks=[{
    mask:[{ mask: '(00) 0000-0000'},{ mask: '(00) 0 0000-0000'}],
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g, "");

      if (number.length > 10) {
        return dynamicMasked.compiledMasks[1];
      }

      return dynamicMasked.compiledMasks[0];
    },
}]
const cardnumber_masks=[{
  mask: [
    {
        mask: '0000 000000 00000',
        regex: '^3[47]\\d{0,13}',
        cardtype: 'american express'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^4\\d{0,15}',
      cardtype: 'visa'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
      cardtype: 'mastercard'
    },
    {
      mask: '0000 0000 0000 0000',
      regex: '^(2[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
      cardtype: 'mastercard'
    },
    {
      mask: '0000 0000 0000 0000',
      cardtype: 'Unknown'
    }
  ],
  dispatch: (appended, dynamicMasked) =>{
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
          let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
          if (number.match(re) != null) {
              return dynamicMasked.compiledMasks[i];
          }
      }
  }
}]

export const CardNumberMask = forwardRef<HTMLInputElement, TextInputProps>(
  ({ handleChange,onComplete, name, type,id }, ref) => {
    //return <input  onChange={handleChange}  name={name}  type={type}  ref={ref}  />;
    return (<IMaskInput
       id={id}
       onChange={handleChange}
       name={name}
       type={type}
       inputRef={ref}
       unmask={true}
       className={styles.txt}
       onAccept={(value,mask, ...args) => {
        console.log('onAccept start');
        console.log(mask, args);
        console.log('onAccept end');
        //o//nComplete(value)
       }}
       onComplete={(...ar)=> {
        onComplete(ar[0])
       }}
       
       mask={cardnumber_masks}
     />
   );
   
});




export const CVCMask = forwardRef<HTMLInputElement, TextInputProps>(
    ({ handleChange,doFlip, name, type,id }, ref) => {
     //return <input  onChange={handleChange}  name={name}  type={type}  ref={ref}  />;
     return (<IMaskInput
        id={id}
        onChange={handleChange}
        name={name}
        type={type}
        inputRef={ref}
        unmask={true}
        className={styles.txt}
        onAccept={(value) => {
          doFlip(true);
        }}
        onComplete={(...ar)=> {
          setTimeout(() => {
            doFlip(false);
          }, 3000);
         }}
        mask="000"
        //mask={cvc_masks}
      />
    );
    
});


const customMask = function (value) {
  var pattern = new RegExp(/^[A-Za-z ]+$/i);
  console.log(value, pattern.test(value));
  return pattern.test(value);
};
export const CardNameMask = forwardRef<HTMLInputElement, TextInputProps>(
  ({ handleChange,doFlip, name, type,id }, ref) => {
   //return <input  onChange={handleChange}  name={name}  type={type}  ref={ref}  />;
   return (<IMaskInput
      id={id}
      onChange={handleChange}
      name={name}
      type={type}
      inputRef={ref}
      unmask={true}
      className={styles.txt}
      onAccept={(value) => {
        doFlip(true);
      }}
      onComplete={(...ar)=> {
        setTimeout(() => {
          doFlip(false);
        }, 3000);
       }}
      //mask=String
      mask= {customMask}
      // pattern: "/^[0-9 ]+$/"
    />
  );
  
});

    
