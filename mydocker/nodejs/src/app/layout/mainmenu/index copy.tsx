import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as mainmen_styles from './mainmenu.module.css';

const Wrapper = styled.div`
    width:100%;
    height:25px;
    float:right;
    font-family:'Montserrat'
`;
const Content = styled.div`

`;


export const MainMenu = () => {
    const id = "updown_up";
    const contentElement = useRef(null);
    const [womanMenuShow, setWomanMenuShow] = useState(true);
    const linkClick = ()=>{
        
        
    }
    return (
        <Wrapper>
            <div className={mainmen_styles.dropdown}>
                <button className={mainmen_styles.dropbtn} >SHOP WOMEN<i className={mainmen_styles.arrow + ' ' + mainmen_styles.updown} id={id}></i></button>
                <div className={mainmen_styles.dropdown_content} ref={contentElement}>
                    <Link className={mainmen_styles.link} to="/products" onClick={linkClick}>Anal Toys</Link>
                    <a className={mainmen_styles.link} href="#">Dildos</a>
                    <a className={mainmen_styles.link} href="#">Vibrators</a>
                </div>
            </div>
            <div className={mainmen_styles.dropdown}>
                <button className={mainmen_styles.dropbtn} >SHOP MEN<i className={mainmen_styles.arrow + ' ' + mainmen_styles.updown} id={id}></i></button>
                <div className={mainmen_styles.dropdown_content}>
                    <a className={mainmen_styles.link} href="#">Cock Rings</a>
                    <a className={mainmen_styles.link} href="#">Fleshlights</a>
                    <a className={mainmen_styles.link} href="#">Penis Pumps</a>
                    <a className={mainmen_styles.link} href="#">Sex Dolls</a>
                    <a className={mainmen_styles.link} href="#">Vibrators</a>
                </div>
            </div>
        </Wrapper>
    );
}

