import styled from "styled-components";

interface SearchSectionProps {
  isVisible?: boolean;
  onClick?: () => void;
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

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  width:100%;
  height: 100vh;
  font-family: 'Montserrat';
`;

export const Section = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  height: 100vh;
`;

interface NavProps {
  margin?: string;
}

export const SearchSection = styled.div<SearchSectionProps>`

  position:absolute;
  width:100%;
  height:${ props => props.isVisible ? '130px':'-130px'};
  left: 0px;
  right: 0px;
  transform: ${ props => props.isVisible ? 'translateY(0px)' : "translateY(-130px)"}; 

  transition: ease-in .7s ;
  background-color:#fff;
  border-bottom:1px solid #d3d3d3;
  z-index:1;
`;

export const NavSection = styled.div<NavProps>`
  width:100%;
  display: grid;
  padding:0;
  grid-template-columns: 10% 70% auto;
  top:0;
  z-index:0;
  position::absolute;
  height:100px;
  justify-content: center;
  align-items: center;  
  font-family: 'Open Sans;
  background-color:red;
`;
export const MainSection = styled.div`
  width:100%;
  height:100%;
  
`;




export const FooterSection = styled.div`
  width:100%;
  
`;

export const LogoSection = styled.div`
    font-size:20px;
    height:25px;
    margin-top:-30px;
`;
export const MenuSection = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: 80% 1fr;
`;

export const ThreeDotSection = styled.div`
  width:50px;
  height:50px;
  display: flex;
  margin-top:25px;
  font-size:30px;
`;
//new 
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
  sm: `min-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
}


export const SmallMobile = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media only screen and ${device.xs} {
    flex-direction: column;
  }
  `;
 export const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media only screen and ${device.sm} {
    flex-direction: column;
    backgroun-color:blue;
  }
  `;