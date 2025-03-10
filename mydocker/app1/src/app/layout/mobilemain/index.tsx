import React from 'react';
import * as styles from './mobile.module.css';
import { HamburgerSVG } from 'app/svg';
import { Accordian } from './accordian';

export const MobileMain =()=>{
    return (
        <>
         <div className={styles.navbar}>
            <a href="#menu1" className={styles.btn}>
           <HamburgerSVG/>
            </a>
        </div>
        <div id="menu1" className={styles.menu}>
            <a href="#" className={styles.close}>&times;</a>
            <div className={styles.menu_header}>MENU</div>
            <nav>
            <Accordian/>
            </nav>
        </div>
        <a href="#" className={styles.close_menu}></a>
        </>
    )
}

