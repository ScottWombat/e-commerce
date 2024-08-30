import { useState } from "react";
import styled, { css } from "styled-components";
import styles from './right_menu.module.css';

interface RightMenuContainerProps{
    slideout?: boolean;
    
}
interface CloseRightMenuProps{
  onClick?: () => void;
}
const RightMenuContainer = styled.div<RightMenuContainerProps>`
    position:fixed;
    width:320px;
    height:100vh;
    font-size:24px;
    top: 0px;
    right: ${ props => props.slideout ? '0px' : '-350px'};
    z-index: 2;
    background-color: white;
    transition: ${ props => props.slideout ?'right 900ms cubic-bezier(.9, 0, .33, 1)':'right 1s ease-in-out'};
`;
const TopSection = styled.div`
  width: 100%;
  height:20%;
  float:right;
`
const DropdownSection = styled.div`
  width: 100%;
  height:100%;
`


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

`;

export const CustomButtonContainer = styled.button<CloseRightMenuProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonStyles}
`;


export const SlideRightMenu = (props:any) =>{
   const [isOpen, setIsOpen] = useState(true);
    const dropdownOnClick = () =>{
      setIsOpen(!isOpen)
    }
    return (
        <RightMenuContainer slideout={props.slideout}>
           <TopSection>
           <a href='#' onClick={props.onClick} className={styles.link}>
           <span className={styles.close + ' ' + styles.rounded + ' ' + styles.thick}></span>
           </a>
           </TopSection>
           <DropdownSection>
           <div className={isOpen?styles.wrapper + ' ' + styles.active:styles.wrapper}  id="wrapper" onClick={dropdownOnClick}>
              <div className={styles.click_text}>
                    <div>SHOP</div> 
                    <div className={isOpen?styles.arrow_up :styles.arrow_down}></div>
              </div>
            <ul className={styles.topic}>
            <li><a href='#' className={styles.link1}>COCK RINGS</a></li>
            <li><a href='#' className={styles.link1}>BUTT PLUGS</a></li>
            <li><a href='#' className={styles.link1}>STROKERS</a></li>
            <li><a href='#' className={styles.link1}>PENIS PUMPS</a></li>
            <li><a href='#' className={styles.link1}>DILDOS</a></li>
            <li><a href='#' className={styles.link1}>ANAL STIMULATOR</a></li>
            <li><a href='#' className={styles.link1}>ANAL DOUCHES</a></li>
            <li><a href='#' className={styles.link1}>ANAL BALLS & BEADS</a></li>
            <li><a href='#' className={styles.link1}>PROSTATE MASSAGERS</a></li>
            <li><a href='#' className={styles.link1}>ANAL LUBRICANTS</a></li>
            </ul>  
          </div>
           </DropdownSection>
        </RightMenuContainer>
    );

}