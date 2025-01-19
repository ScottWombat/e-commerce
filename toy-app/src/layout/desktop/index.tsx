import React, { useEffect, useState} from 'react';
import { Outlet } from 'react-router-dom'
import styled from "styled-components";
import { Section , SearchSection, NavSection ,MainSection, FooterSection,LogoSection,MenuSection} from 'src/layout'
import { MainMenu } from "../../component/mainmenu";
import { UserMenu } from '../../component/usermenu';
import { SearchBox } from 'src/component/search';

export const Desktop = (props:any) =>{

    const [searchVisible, setSearchVisible] = useState(false);
    
    const searchOnClick = () =>{
        setSearchVisible(!searchVisible)
    }
    return (
        
        <Section>
            <SearchSection isVisible={searchVisible}>
                <SearchBox onClose={searchOnClick}/>
            </SearchSection>
            <NavSection>
              <LogoSection>JACK&JILL6</LogoSection>
              <MenuSection>
                <MainMenu/>
                <UserMenu onClick={searchOnClick}/>
               </MenuSection>
            </NavSection>
            <MainSection>
                <Outlet/>
            </MainSection>
            <FooterSection>Footer</FooterSection>
        </Section>
        
    )
}