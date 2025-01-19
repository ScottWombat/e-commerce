import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoSection,MenuSection} from 'src/layout'
import { MainMenu } from "src/component/mainmenu";
import { UserMenu } from 'src/component/usermenu';
import { NavSection } from 'src/layout'
import styles from './index.module.css'
import { createClient } from 'redis';
export const Desktop = (props:any) =>{
  const redisClient = createClient({
    url: 'redis://172.18.1.4',
    username: 'default',
    password: 'rev123',
})
redisClient.connect();
redisClient.on('error', err => console.log('Redis error: ', err.message));
redisClient.on('connect', () => console.log('Connected to redis server'));
    return (
        <NavSection margin={props.margin}>
          <LogoSection>JACK&nbsp;<span className={styles.amp}>&</span>&nbsp;JILLooo</LogoSection>
          <MainMenu/>
          <UserMenu onClick={props.onClose} marginLeft={'10px'} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
        </NavSection>
    );
}