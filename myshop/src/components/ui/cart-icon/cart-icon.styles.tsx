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