import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container} from 'src/layout';
import { Desktop } from 'src/layout/desktop';
import { Mobile} from 'src/layout/mobile';
import useDetectResize from 'src/utils/detect-resize';
export const App = () =>{
  const { isMobile, isTablet, isLaptop, isDesktop,isLarge } = useDetectResize();
  console.log(isMobile)
  return (
    <Container>
      { isMobile && <Mobile/>}
      { isDesktop && <Desktop/>}
    </Container>
  );
}


