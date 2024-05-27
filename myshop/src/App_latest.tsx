import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
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
import { isMember } from './store/member/memberReducer';
import MemberLogin from './pages/member-login';
import GuestLogin from './pages/guest-login';
import CreateAccount from './pages/create-account';
import Dummy from './pages/dummy';
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
const PrivateRoutes = () => {
  let auth = {'token': false}
  return(
      auth.token ? <Outlet/> : <Navigate to="/content"/>
  )
}


const App = () => {
  const { windowDimensions, isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  const is_Member = useSelector(isMember)
  console.log("me")
  console.log(is_Member)
  return (
    <BrowserRouter>
        <Layout>{isMobile && <Mobile/>}</Layout>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Dummy/>} path="/dummy"/>
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/create_account" element={<CreateAccount />} />
            <Route path="/member_login" element={<MemberLogin />} />
            <Route path="/guest_login" element={<GuestLogin />} />
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
