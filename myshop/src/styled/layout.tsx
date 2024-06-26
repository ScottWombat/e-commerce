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
  @media all and (min-width: 320px) and and (max-width: 479px){
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    grid-template-areas: "mobile_section";
  }
  @media all and (max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows:  1fr;
    grid-template-areas: "tablet_section";
  }
  @media all and(max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "laptop_section";
                                             
`;
export const MobileSection = styled.div`
  grid-area: mobile_section;
  margin-right:0;
  width: 100%;
  height:50px;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:  1fr;
  grid-template-areas: "hamberger logo user_menu";
`;
export const TabletSection = styled.div`
  grid-area: tablet_section;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows:  1fr;
  grid-template-areas: "hamberger logo user_menu";
`;
export const LaptopSection = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: 30fr 40fr 30fr;
  grid-template-rows:  25px 50px;
  grid-template-areas: "empty empty2 top_menu"
                       "logo scroll_menu user_menu";                            
`;
export const LaptopSection2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  30px;
  grid-template-areas: "main_menu";   
  text-align:center;   
  width:100%;    
  z-index:1002;
`;

export const Layout1 = styled.div`
  display: grid;
  grid-gap: 0px;
  @media only screen and (min-width: 320px) and and (max-width: 479px){
    grid-template-columns: 30fr 40fr 30fr;
    grid-template-areas: "hamberger logo user_menu";                  
  }
  @media all and (max-width: 768px){
    grid-template-columns: 30fr 40fr 30fr;
    grid-template-areas: "hamberger logo user_menu";
  }
  @media all and(max-width: 1024px) {
    grid-template-columns: 30fr 40fr 30fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ". . top_menu"
                         ". logo user_menu";
  }
  
`;
export const Layout2 = styled.div`
    display: grid;
    grid-gap: 0px;
    
    @media all and (max-width: 480px) {
      grid-template-columns: repeat(3,1fr);
      grid-template-areas: ". . top_menu"
                           "hamberger logo user_menu";                         
    }
    @media all and (max-width: 768px){
      grid-template-columns: repeat(3,1fr);
      grid-template-rows:  1fr 1fr;
      grid-template-areas: "top_menu top_menu top_menu"
                           "hamberger logo user_menu";
    }
    @media all and(max-width: 1024px) {
      grid-template-columns: repeat(3,1fr);
      grid-template-rows:  1fr 1fr 1fr;
      grid-template-areas: ". . top_menu"
                           ". logo user_menu"
                           ". scroll_menu .";
    }
`;
export const TopMenuSection = styled.div`
     grid-area: top_menu
     width: 100%;
     height:30px;
`;

export const HambergerSection = styled.div`
     grid-area: hamberger;
     text-aligh: left;
     
`;


export const ScrollTextSection = styled.div`
     grid-area: scroll_menu;
     text-align: center;
     width: 100%;
     font-size:12px;
     margin-top:10px;
`;

export const MainMenuSection = styled.nav`
  grid-area: main_menu;
  text-align: center;
`;

export const LogoSection = styled.div`
  display: relative;
  grid-area: logo;
  width: 100%;
  text-align: center;
  
`;

export const UserMenuSection = styled.div`
  display:relative;
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

export const EmptySection = styled.div`
    grid-area: empty; 
`;
export const EmptySection2 = styled.div`
    grid-area: empty2; 
`;
//export default Layout;