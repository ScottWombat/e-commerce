
import React,{useState,Suspense, useEffect,} from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import { SearchBox } from 'app/components/searchbox';
import { FilterBox } from 'app/components/filter-box';
import { MainMenu } from "./mainmenu";
import { UserMenu } from './usermenu';
import { Logo } from 'app/components/logo';
import MenuItem from 'app/components/hamberger/menu-item';
import BurgerMenu from 'app/components/hamberger/burger-menu';
import Hamberger from 'app/components/hamberger';
//import { Hamburger } from 'app/svg/hamburger';
import { MagnifyGlass } from 'app/svg/magnify_glass';
import { ShoppingBagIcon } from 'app/svg/bag';
import { MobileMain } from 'app/layout/mobilemain';
import {UserMobileMenu} from 'app/components/mobile-usermenu';
import { MenuSlider } from 'app/components/menu-slider';
import CartSlider from 'app/components/cart-slider';
interface SearchSectionProps {
    isVisible?: boolean;
    onClick?: () => void;
}
interface FilterSectionProps {
  isVisible?: boolean;
  onClick?: () => void;
}

interface NavProps {
    margin?: string;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  width:100%;
  height: 100vh;
  font-family: 'Montserrat';
`;
const Section = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr 1fr auto;
  grid-template-columns: 100%;
  height: 100vh;
  width:100%;
  backgroun-color:red;
`;

const SearchSection = styled.div<SearchSectionProps>`

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

const FilterSection = styled.div<FilterSectionProps>`

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

const MobileSection = styled.div`
 
  margin-right:0;
  width: 100%;
  height:50px;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  1fr;
  grid-template-areas: "hamberger logo user_menu";
`;
const MainSection = styled.div`
  width:100%;
  height:100%;
  position:relative;
`;
const MenuSection = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 80% 1fr;
`;
const NavSection = styled.div<NavProps>`
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
  font-family: 'Open Sans;
  background-color:red;
`;


const LogoSection = styled.div`
    font-size:20px;
    height:25px;
    grid-area: logo;
    text-align:center;
`;

const FooterSection = styled.div`
  width:100%;
`;

const HambergerSection = styled.div`
     grid-area: hamberger;
     margin-left:15px;
     margin-top:12px;
`;

const UserMenuSection = styled.div`
  grid-area: user_menu;
  float:right;
  text-align:right;
  margin-right:0px;
  margin-top:10px;
  width:100%;
  
`;
const MobileMenu = (props) =>{
  const [open,setOpen] = useState(true)
  return(
      <MobileSection>
      <HambergerSection><MenuSlider on={open}/></HambergerSection>
      <LogoSection><Logo/></LogoSection>
      <UserMenuSection><UserMobileMenu searchOnClick={props.searchOnClick} cartOnClick={props.cartOnClick}/></UserMenuSection>
      </MobileSection>
  )
}

const MobileMenu1 = (props) =>{
  return(
      <MobileSection>
      <HambergerSection><MobileMain/></HambergerSection>
      <LogoSection><Logo/></LogoSection>
      <UserMenuSection><UserMobileMenu searchOnClick={props.searchOnClick} cartOnClick={props.cartOnClick}/></UserMenuSection>
      </MobileSection>
  )
}

export const MobileLayout = (props) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [sidebar,setSideBar]=useState(false);
    const [open,setOpen] = useState(props.close);
    const searchOnClick = () =>{
        setSearchVisible(!searchVisible)
    }
    const cartOnClick = () =>{
      setSideBar(!sidebar)
    }

    const cartOnClose = () =>{
      setSideBar(!sidebar)
    }
    
    return(
        <Container>
            <Section>
                <FilterSection isVisible={filterVisible}>
                   <FilterBox/>
                </FilterSection>
                <SearchSection isVisible={searchVisible}>
                    <SearchBox onClose={searchOnClick}/>
                </SearchSection>
                 <MobileMenu open={open} searchOnClick={searchOnClick} cartOnClick={cartOnClick}/>
                 <MainSection>
                    <Suspense fallback={<>loading...</>}>
                        <Outlet/>
                    </Suspense>
                </MainSection>
                 <FooterSection>Footereeee</FooterSection>
                 <CartSlider showCartSlider={sidebar} onClose={cartOnClose}/>
            </Section>
        </Container>
    );
}