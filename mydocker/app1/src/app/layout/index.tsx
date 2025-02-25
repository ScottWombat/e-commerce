import React, { useState ,Suspense} from 'react';
import useDetectResize from 'app/utils/detect-resize';
import { Outlet } from 'react-router-dom';
import { Container, Section, SearchSection, MainSection, FooterSection } from './index.styled';
//import { Desktop } from './desktop/index';
import { SearchBox } from 'app/components/searchbox';
import { MainMenu } from "./mainmenu";
import { UserMenu } from './usermenu';
import { LogoSection, NavSection } from './index.styled';
import { Logo } from 'app/components/logo';
import * as styles from './index.module.css'

const Mobile = (props) =>{

}
const Laptop = (props) =>{

}
const Desktop = (props) =>{
    return(
        <NavSection margin={props.margin}>
            <LogoSection><Logo/></LogoSection>
            <MainMenu/>
            <UserMenu onClick={props.onClose} marginLeft={'10px'} svgWidth={props.svgWidth} svgHeight={props.svgHeight}/>
        </NavSection>
    )
}

const LargeDesktop = (props) =>{

}

export const DesktopLayout = (props) => {
    const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
    const [searchVisible, setSearchVisible] = useState(false);
    const searchOnClick = () =>{
        setSearchVisible(!searchVisible)
    }
    return(
        <Container>
            <Section>
                <SearchSection isVisible={searchVisible}>
                    <SearchBox onClose={searchOnClick}/>
                </SearchSection>
                <Desktop onClose={searchOnClick} margin='50px' svgWidth='2.5em' svgHeight='2.5em'/>
                <MainSection>
                    <Suspense fallback={<>loading...</>}>
                        <Outlet/>
                    </Suspense>
                </MainSection>
                <FooterSection>Footer</FooterSection>
            </Section>
        </Container>
    );
}

