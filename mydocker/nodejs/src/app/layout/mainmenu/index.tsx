import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as mainmen_styles from './mainmenu.module.css';
interface ContentProps {
    show: boolean;
}

const Button = styled.button`
    background-color: #fff;
    color: #000;
    padding: 0;
    border:none;
    letter-spacing: 3px;
    font-weight:700;
    font-size:1.2rem;
    margin-top:3px;
    margin-left: auto;
    margin-right: auto;
    border:0px;
    width:220px;
`;
const Content = styled.div<ContentProps>`
    position:relative;
    display: ${ props => props.show ? 'block' : 'none'};;
    color:#fff;
    background-color: #000;
    border: 0px solid #000;
    min-width: 160px;
    z-index: 1;
    &:before {
        content: "";
        vertical-align: middle;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 100%;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #000;
    }
`;

const Wrapper = styled.div`
    width:100%;
    height:25px;
    float:right;
    font-family:'Montserrat'
`;

const Dropdown = styled.div`
    position: relative;
    float:right;
    argin-right:10px;
    &:hover {
        ${Content}{
         display: block;
         margin-top: 20px;
         margin-left:-30px;
    
        }
     }
   
`;




export const MainMenu = () => {
    const id = "updown_up";
    const contentElement = useRef(null);
    const [visible, setVisible] = useState(false);
    const linkClick = () => {
        let v = !visible
        //alert(v)
        setVisible(false)
    }
    return (
        <Wrapper>
            <div className={mainmen_styles.dropdown}>
                <button className={mainmen_styles.dropbtn} >SHOP WOMEN<i className={mainmen_styles.arrow + ' ' + mainmen_styles.updown} id={id}></i></button>
                <div className={mainmen_styles.dropdown_content} ref={contentElement}>
                    <Link className={mainmen_styles.link} to={`/products/men/anal toys`}>Anal Toys</Link>
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

