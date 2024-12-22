import React from 'react';
import * as styles from './bag-message.module.css';
export const BagMessage  = (props )=>{
    return (
       
        <div>
            <div className={styles.header}>TOTAL (4 items) $888</div>
            <div className={styles.desc}>Items in your bag are not reserved — check out now to make them yours.</div>
        </div>
    )
}
export const BagEmptyMessage  = (props )=>{
    return (
        <>There are no items in your bag.</>
    )
}