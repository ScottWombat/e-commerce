import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import{ Marquee, Header, Footer} from 'src/components/ui'
import RootFragment from 'src/components/fragments/root'
import UserPage from 'src/pages/user';
import ForgetPasswordPage from 'src/pages/forget-password';
import ContentPage from 'src/pages/content';
import Menu from 'src/components/ui/menu';
import Logo from 'src/components/ui/logo';
import Hamberger from './components/ui/hamberger';
import { Layout, ScrollTextSection, LogoSection, MainMenuSection,UserMenuSection,HambergerSection,MainContent } from 'src/styled/layout';
import ScrollText from 'src/components/ui/scroll-menu'
import UserMenu from 'src/components/ui/user-menu'
const App = () => {
  return (
    <BrowserRouter>
    <Layout>
     
      <HambergerSection>
       <Hamberger/>
      </HambergerSection>
     
    </Layout>
    </BrowserRouter>
  );
}

export default App;
