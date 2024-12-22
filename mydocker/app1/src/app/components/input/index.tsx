
import React ,{ useState, useEffect, useRef } from "react";
import { Wrapper1,Input,Label} from 'app/views/checkout/input.styled ';
import * as styles from './input.module.css';
const InputBox = ()=>{
    const emptyIcon = "empty.png";
    const checkmark = "checkmark.png";
    const crossmark = "crossmark.png";
    const imgUrl = process.env.PUBLIC_IMAGE_URL + checkmark;
    const list = {
        width: '270px',
        ['font-size']: '24px',
        background: 'url("' + imgUrl +'")',
        ['background-repeat']: 'no-repeat',
        ['background-position']: '50px 0px'        
    }
    const list1 = {
        width: '53px',
        ['font-size']: '24px',
        background: 'url("' + imgUrl +'")',
        ['background-repeat']: 'no-repeat',
        ['background-position']: '50px 0px'        
    }
    return(
       
        <div className={styles.input_wrapper}>
            <div className={styles.left}>
            <div className={styles.input_wrapper}>
               <input type="text" id="username" className={styles.input}/>
               <label htmlFor="username" className={styles.label}>User name</label>
            </div>
            </div>
            <div className={styles.right}>
          
           </div>
       </div>

    )
}

export default InputBox;