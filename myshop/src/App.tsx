import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import{ Marquee, Header, Footer} from 'src/components/ui'
import HomePage from 'src/pages/home';
import UserPage from 'src/pages/user';
import ForgetPasswordPage from 'src/pages/forget-password';
import ContentPage from 'src/pages/content';
import ProductList from 'src/pages/product-list';
import ProductDetails from './pages/product-details';
import Checkout from './pages/checkout';
import Menu from 'src/components/ui/menu';
import Logo from 'src/components/ui/logo';
import Hamberger from './components/ui/hamberger';
import { Layout, ScrollTextSection, LogoSection, MainMenuSection,UserMenuSection,HambergerSection,BannerSection } from 'src/styled/layout';
import ScrollText from 'src/components/ui/scroll-menu'
import UserMenu from 'src/components/ui/user-menu'
import { RightPanelSection } from 'src/styled/layout';
import RightPanel from 'src/components/ui/right-panel';
import Banner from './components/fragments/banner';
import useDetectResize from './utils/detect-resize';
const Mobile = () =>{
  return (
    <>
    <HambergerSection><Hamberger/></HambergerSection>
    <LogoSection><Logo/></LogoSection>
    <UserMenuSection><UserMenu/></UserMenuSection>
    <ScrollTextSection><ScrollText/></ScrollTextSection>
   
    </>
  )
}
const App = () => {
  const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  return (
    <BrowserRouter>
        <Layout>
          {isMobile && <Mobile/>}
          {isTablet && <Mobile/>}
          {isLaptop && <Mobile/>}
          {isDesktop && <Mobile/>}
          {isLarge && <Mobile/>}
        </Layout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/product-list/:men" element={<ProductList />} />
            <Route path="/product-details/:catalog?/:category?" element={<ProductDetails />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
