import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useSelector} from "react-redux";
import{ Marquee, Header, Footer} from 'src/components/ui'
import HomePage from 'src/pages/home';
import UserPage from 'src/pages/user';
import ForgetPasswordPage from 'src/pages/forget-password';
import ContentPage from 'src/pages/content';
import ProductList from 'src/pages/product-list';
import ProductDetails from './pages/product-details';
import Checkout from './pages/checkout';
import MemberLogin from './pages/member-login';
import Menu from 'src/components/ui/menu';
import Logo from 'src/components/ui/logo';
import Hamberger from './components/ui/hamberger';
import { Layout, LaptopSection2,EmptySection,EmptySection2,MobileSection,TabletSection,LaptopSection,ScrollTextSection, LogoSection, MainMenuSection,UserMenuSection,HambergerSection,BannerSection } from 'src/styled/layout';
import ScrollText from 'src/components/ui/scroll-menu'
import UserMenu from 'src/components/ui/user-menu'
import { RightPanelSection } from 'src/styled/layout';
import { TopMenuSection } from 'src/styled/layout';
import TopMenu  from 'src/components/ui/top-menu'
import RightPanel from 'src/components/ui/right-panel';
import Banner from './components/fragments/banner';
import useDetectResize from './utils/detect-resize';
import { isMember } from './store/member/memberReducer';
import CreateAccount from './pages/create-account';

const Mobile = () =>{
  return (
    
    <MobileSection>
    <HambergerSection><Hamberger/></HambergerSection>
    <LogoSection><Logo/></LogoSection>
    <UserMenuSection><UserMenu/></UserMenuSection>
    </MobileSection>
    
  )
}
const Tablet = () =>{
  return (
    <TabletSection>
    <HambergerSection><Hamberger/></HambergerSection>
    <LogoSection><Logo/></LogoSection>
    <UserMenuSection><UserMenu/></UserMenuSection>
    </TabletSection>
  )
}

const Laptop = () =>{
  return (
    <>
    <LaptopSection>
      <EmptySection>&nbsp;</EmptySection>
      <EmptySection2>&nbsp;</EmptySection2>
      <TopMenuSection><TopMenu/></TopMenuSection>
      <LogoSection><Logo/></LogoSection>
      <ScrollTextSection><ScrollText/></ScrollTextSection>
      <UserMenuSection><UserMenu/></UserMenuSection>
    </LaptopSection>
    <LaptopSection2>
      <MainMenuSection><Menu/></MainMenuSection>
    </LaptopSection2>
    </>
  )
}

const Laptop1 = () =>{
  return (
    <>
    <LaptopSection>
    <EmptySection>&nbsp;</EmptySection>
      <EmptySection2>&nbsp;</EmptySection2>
      <TopMenuSection><TopMenu/></TopMenuSection>
      <LogoSection><Logo/></LogoSection>
      <ScrollTextSection>Free Delivery to Australia on orders over $99</ScrollTextSection>
      <UserMenuSection><UserMenu/></UserMenuSection>
  </LaptopSection>
  <LaptopSection2>
    <LogoSection><Logo/></LogoSection>
    <MainMenuSection><Menu/></MainMenuSection>
    <UserMenuSection>ffff<UserMenu/></UserMenuSection>
  </LaptopSection2>
  </>
  )
}
const App = () => {
  const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  const is_Member = useSelector(isMember)
  //console.log("me")
  //console.log(isMobile)
  //console.log(windowDimensions)
  return (
    <BrowserRouter>
          <Layout>
          {isMobile && <Mobile/>}
          {isTablet && <Tablet/>}
          {isLaptop && <Laptop/>}
        </Layout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create_account" element={<CreateAccount/>}/>
            <Route path="/member-login" element={<MemberLogin/>}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/product-list/:catalogue/:category" element={<ProductList />} />
            <Route path="/product-details/:catalog?/:category?/:id?" element={<ProductDetails />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
