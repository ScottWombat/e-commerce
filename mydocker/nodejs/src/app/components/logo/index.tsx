import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css'
export const Logo = () => {
    return (
        <Link to='/home' className={styles.link_logo}>JACK&nbsp;<span className={styles.amp}>&</span>&nbsp;JILL</Link>
    )
}