import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import{ Marquee, Header, Footer, Menu } from 'src/components/ui'
import RootFragment from 'src/components/fragments/home'
import UserPage from 'src/pages/user';
import ForgetPasswordPage from 'src/pages/forget-password';
import ContentPage from 'src/pages/content';
const App = () => {
  return (
    <BrowserRouter>
        <Marquee/>
        <Header/>
        <Menu/>

        <Routes>
            <Route path="/" element={<RootFragment />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/content" element={<ContentPage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
