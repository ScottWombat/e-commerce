import React, { useState ,Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import { SearchBox } from 'src/component/search';
import useDetectResize from 'src/utils/detect-resize';
import { Desktop } from 'src/layout/desktop';
import { Mobile } from 'src/layout/mobile';

interface SearchSectionProps {
  isVisible?: boolean;
  onClick?: () => void;
}
interface NavProps {
  margin?: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  height: 100vh;
`;
export const Section = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  height: 100vh;
`;

export const SearchSection = styled.div<SearchSectionProps>`

  position:absolute;
  width:100%;
  height:${ props => props.isVisible ? '130px':'-130px'};
  left: 0px;
  right: 0px;
  transform: ${ props => props.isVisible ? 'translateY(0px)' : "translateY(-130px)"}; 

  transition: ease-in .7s ;
  background-color:#fff;
  border-bottom:1px solid #d3d3d3;
  z-index:1;
`;


export const NavSection = styled.div<NavProps>`
  width:100%;
  display: grid;
  padding:0;
  grid-template-columns: 10% 70% auto;
  top:0;
  z-index:0;
  position::absolute;
  height:100px;
  justify-content: center;
  align-items: center;  
    
`;
export const MainSection = styled.div`
  width:100%;
  height:100%;
`;

export const FooterSection = styled.div`
  width:100%;
  background-color:red;
`;

export const LogoSection = styled.div`
    font-size:20px;
    height:25px;
`;
export const MenuSection = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 80% 1fr;
`;

export const ThreeDotSection = styled.div`
  width:50px;
  height:50px;
  display: flex;
  margin-top:25px;
  font-size:30px;
`;


export const AppLayout = () => {

  const { isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  const [searchVisible, setSearchVisible] = useState(false);
    
  const searchOnClick = () =>{
    setSearchVisible(!searchVisible)
  }
  return (
    <Container>
    <Section>
        <SearchSection isVisible={searchVisible}>
          <SearchBox onClose={searchOnClick}/>
        </SearchSection>
        { isTablet && <Mobile onClose={searchOnClick} margin='15px' svgWidth='2em' svgHeight='2em'/>}
        { isMobile && <Mobile onClose={searchOnClick} margin='15px' svgWidth='2em' svgHeight='2em'/>}
        { isDesktop && <Desktop onClose={searchOnClick} margin='50px' svgWidth='2.5em' svgHeight='2.5em'/>}
        { isLarge && <Desktop onClose={searchOnClick} margin='50px' svgWidth='2.5em' svgHeight='2.5em' />}
        <MainSection>
          <Suspense fallback={<>loading...</>}>
          <Outlet/>
          </Suspense>
        </MainSection>
        <FooterSection>Footer</FooterSection>
    </Section>
    </Container>
  )
}

//export default Layout;