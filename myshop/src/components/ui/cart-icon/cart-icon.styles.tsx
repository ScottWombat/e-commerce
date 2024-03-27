import styled from 'styled-components';


import ShoppingBagIcon from './shopping-bag'

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const ShoppingIcon = styled(ShoppingBagIcon)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
  color:red;
`;

interface CartSliderProps{
  sidebar: boolean;
  
}
export const CartSlider = styled.aside<CartSliderProps>`
  background: #354165;
  color: #75757a;
  width: 250px;
  height: 100vh;
  display: inline;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${ props => props.sidebar ? '0px' : '-340px'};
  z-index: 10;
  transition: right 0.5s ease-in-out;
`;
