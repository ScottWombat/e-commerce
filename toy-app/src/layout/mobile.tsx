import { NavSection,LogoSection,ThreeDotSection } from 'src/layout'
import { MainMenu } from "src/component/mainmenu";
import { UserMenu } from 'src/component/usermenu';
import { SearchBox } from 'src/component/search';
import React, { useState, useEffect } from 'react';
import { SlideRightMenu } from 'src/component/slide_right_menu';
import { SlideLeftMenu } from 'src/component/slide_left_menu';
//import { ThreeDotsMenu } from 'src/component/three_dots_menu';
import styles from './index.module.css'

export const Mobile = (props:any) =>{
    const [rightMenu, setRightMenu] = useState(false);
    const [leftMenu, setLeftMenu] = useState(false)
    const [closeRightMenu, setCloseRightMenu] = useState(true);
    const rightMenuOnClick =()=>{
      setRightMenu(!rightMenu);
    }
    const leftMenuOnClick =()=>{
      setLeftMenu(!leftMenu)
    }
    const closeRightMenuOnClick = () =>{
      setRightMenu(!rightMenu);
    }
    const closeLeftMenuOnClick = () =>{
      setLeftMenu(!leftMenu);
    }
    return(
        <div className={styles.rightMenuWrapper}>
          <SlideLeftMenu>dd</SlideLeftMenu>
          <NavSection margin={props.margin}> 
            <UserMenu onClick={props.onClose} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
            <LogoSection>JACK&JILL</LogoSection>
            <ThreeDotSection onClick={rightMenuOnClick}>...</ThreeDotSection>
          </NavSection>
          <SlideRightMenu slideout={rightMenu} onClick={closeRightMenuOnClick}>hhhhhh</SlideRightMenu>
        </div>
    )
}