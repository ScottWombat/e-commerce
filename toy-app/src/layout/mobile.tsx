import { NavSection,LogoSection,ThreeDotSection } from 'src/layout'
import { MainMenu } from "src/component/mainmenu";
import { UserMenu } from 'src/component/usermenu';
import { SearchBox } from 'src/component/search';
import React, { useState, useEffect } from 'react';
import { SlideRightMenu } from 'src/component/slide_right_menu';
//import { ThreeDotsMenu } from 'src/component/three_dots_menu';
import styles from './index.module.css'

export const Mobile = (props:any) =>{
    const [rightMenu, setRightMenu] = useState(false);
    const [closeRightMenu, setCloseRightMenu] = useState(true);
    const rightMenuOnClick =()=>{
      setRightMenu(!rightMenu);
    }
    const closeRightMenuOnClick = () =>{
     
      //setCloseRightMenu(!setCloseRightMenu);
      setRightMenu(!rightMenu);
    }
    return(
        <div className={styles.rightMenuWrapper}>
         
          <NavSection margin={props.margin}> 
            <UserMenu onClick={props.onClose} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
            <LogoSection>JACK&JILL</LogoSection>
            <ThreeDotSection onClick={rightMenuOnClick}>...</ThreeDotSection>
          </NavSection>
          <SlideRightMenu slideout={rightMenu} onClick={closeRightMenuOnClick}/>
        </div>
    )
}