import styled from "styled-components";

interface SearchSectionProps {
  isVisible?: boolean;
  onClick?: () => void;
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
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
