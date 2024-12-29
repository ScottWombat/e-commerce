import React from 'react';
import * as styles from './index.module.css';
const CreditCardCvc = ({zindex}) =>{
    return (
        <div style={{display:'absolute',zoom:'0.5',marginLeft:'210px',zIndex:'1'}}>
        <div className={styles.creditcard + ' ' + styles.creditcard_back}>
        <div className={styles.strip}></div>
        </div>  
        </div>
    );
}

export default CreditCardCvc;