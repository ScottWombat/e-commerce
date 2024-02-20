import styled from "styled-components";

interface Size {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  
  const size: Size = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
  }
  
  export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  }

  export const Layout = styled.div`
    display: grid;
    grid-gap: 0px;
    @media (max-width: 480x) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
          "hamberger logo";
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
            "hamberger . ."
            "scroll_menu scroll_menu scroll_menu"
            "logo main-menu user-menu"
            "main-content main-content main-content"
    }
`;
export const HambergerSection = styled.div`
     grid-area: hamberger;
     text-aligh: left;

`;


export const ScrollTextSection = styled.div`
     grid-area: scroll_menu;
     text-align: center;
`;

export const MainMenuSection = styled.nav`
  grid-area: main-menu;
  text-align: center;
  margin-top: 10px;
`;

export const LogoSection = styled.div`
  grid-area: logo;
  text-align: center;
  background-color: red;
`;

export const UserMenuSection = styled.div`
  grid-area: user-menu;
  padding: 0rem;
  margin: 0;
  text-align: left;
`;

export const MainContent = styled.div`
  background: #3a3a55;
  grid-area: main-content;
  padding: 0rem;
  margin: 0;
  text-align: right;
`;

export const RightPanelSection = styled.div`
  grid-area: right-panel;
  padding: 0rem;
  margin: 0;
  text-align: right;
`;


//export default Layout;