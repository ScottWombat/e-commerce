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
    
    @media all and (max-width: 480px) {
      grid-template-columns: repeat(3,1fr);
      grid-template-areas: ". . top_menu"
                           "hamberger logo user_menu"
                           "scroll_menu scroll_menu scroll_menu"
                           "banner banner banner";
                           
    }
    @media all and (max-width: 768px){
      grid-template-columns: repeat(3,1fr);
      grid-template-areas: ". . top_menu"
                           "hamberger logo user_menu"
                           "scroll_menu scroll_menu scroll_menu"
                           "banner banner banner";
    }
    @media all and(min-width: 992px) {
      grid-template-columns: repeat(3,1fr);
      grid-template-areas: ". . top_menu"
                           "hamberger logo user_menu"
                           "scroll_menu scroll_menu scroll_menu"
                           "banner banner banner";
    }
`;
export const TopMenuSection = styled.div`
     grid-area: top_menu;
     text-aligh: right;
     width: 100%;
`;

export const HambergerSection = styled.div`
     grid-area: hamberger;
     text-aligh: left;
     width: 50%;
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
`;

export const UserMenuSection = styled.div`
  grid-area: user_menu;
`;

export const BannerSection = styled.div`
  background: #3a3a55;
  grid-area: banner;
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