import React from 'react';
import * as styles from './home.module.css'
export const HomePage = () =>{
    return(
       <div className={styles.wrapper}>
         <img className={styles.banner} src= '/assets/images/photo2.jpg' alt='gfg' />
         <div>test</div>
       </div>
    )
}