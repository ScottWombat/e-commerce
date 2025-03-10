import React from 'react';
import styled from "styled-components";
import { bool, func } from 'prop-types';
import {Hamburger} from 'app/svg/hamburger';
interface BurgerStatus{
    open: boolean
}
const StyledBurger = styled.button<BurgerStatus>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;
const BurgerMenu = (props) =>{
    return (
        <StyledBurger open={props.close} onClick={() => props.setOpen(!props.open)}>
        <Hamburger/>
        </StyledBurger>
    )
}

BurgerMenu.protoTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}
export default BurgerMenu;
