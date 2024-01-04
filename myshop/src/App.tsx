import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import{ Marquee, Header, Footer, Menu } from 'src/components/ui'
import RootFragment from 'src/components/fragments/root'
import UserPage from 'src/pages/user';
const App = () => {
  return (
    <BrowserRouter>
        <Marquee/>
        <Header/>
        <Menu/>
        <Routes>
            <Route path="/" element={<RootFragment />} />
            <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
