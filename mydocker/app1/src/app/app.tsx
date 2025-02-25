
import React from 'react';
import { DesktopLayout} from './layout'
import styled from 'styled-components';
import { Mobile, SmallMobile } from './layout/index.styled';


const ScreenLayout = styled.div`
  flex-direction: row;
  display: flex;
  height: 100vh;
  width: 100vw;
  
`;

export const App = (props) => {
  return (
    <ScreenLayout>
      <DesktopLayout/>
    </ScreenLayout>
  );
};


