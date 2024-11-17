import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainMenu } from "../mainmenu";
import { UserMenu } from '../usermenu';
import { LogoSection, NavSection } from '../index.styled';
import { Logo } from 'app/components/logo';
import * as styles from './index.module.css'
export const Desktop = (props:any) =>{
    
    return (
        <NavSection margin={props.margin}>
          <LogoSection><Logo/></LogoSection>
          <MainMenu/>
          <UserMenu onClick={props.onClose} marginLeft={'10px'} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
        </NavSection>
    );
}