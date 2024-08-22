import React, { useState } from 'react';
import { LogoSection,MenuSection} from 'src/layout'
import { MainMenu } from "src/component/mainmenu";
import { UserMenu } from 'src/component/usermenu';
import { NavSection } from 'src/layout'
export const Desktop = (props:any) =>{
    
    return (
        <NavSection margin={props.margin}>
          <LogoSection>JACK&JILL</LogoSection>
          <MainMenu/>
          <UserMenu onClick={props.onClose} marginLeft={'10px'} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
        </NavSection>
    );
}