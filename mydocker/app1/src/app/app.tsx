
import React from 'react';
import { Layout} from './layout'
import styled from 'styled-components';
export const LandingPage = styled.div`
  flex-direction: row;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const App = (props) => {
  return (
    <LandingPage>
      <Layout/>
    </LandingPage>
  );
};

