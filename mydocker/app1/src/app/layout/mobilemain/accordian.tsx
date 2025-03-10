import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as styles from './accordian.module.css';

const Span = styled.span`
    font-size:12px;
`
export const Accordian =(props)=>{
    const onClick =(e)=>{
        props.onClick("d")
    }
    return(
        <>
        <div className={styles.collapse_accordion}>
            <ul className={styles.ulparent}>
            <li>
                <input type="checkbox" id="list_item_1" name="accrodion"/>
                <label htmlFor="list_item_1">
                    <span className={styles.expandText}>MEN</span>
                    <span className={styles.collpaseText}>MEN</span>
                </label>
                <ul className={styles.ulchild}>
                    <li><a className={styles.a_underline}>COCK RINGS</a></li>
                    <li><a className={styles.a_underline}>FLESHLIGHTS</a></li>
                    <li><a className={styles.a_underline}>PENIS PUMPS</a></li>
                    <li><a className={styles.a_underline}>SEX DOLLS</a></li>
                    <li><Span onClick={onClick}>VIBRATORS</Span></li>
                </ul>
            </li>
            <li>
                <input type="checkbox" id="list_item_11" name="accrodion"/>
                <label htmlFor="list_item_11">
                    <span className={styles.expandText}>WOMEN</span>
                    <span className={styles.collpaseText}>WOMEN</span>
                </label>
                <ul className={styles.ulchild}>
                    <li><a className={styles.a_underline}>ANAL TOYS</a></li>
                    <li><a className={styles.a_underline}>DILDOS</a></li>
                    <li><a className={styles.a_underline}>VIBRATORS</a></li>
                </ul>
            </li>
           </ul>
        </div>
        </>
        
    )
}
