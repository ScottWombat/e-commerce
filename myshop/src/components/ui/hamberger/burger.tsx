import React from "react";
import styled from "styled-components";
import { bool, func } from 'prop-types';

interface BurgerStatus{
  open: boolean
}

const StyledBurger = styled.button<BurgerStatus>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.open ? "#0D0C1D" : "#000"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
    div:first-child {
      transform: ${(props)=> props.open ? "translateX(5px) rotate(45deg)": "rotate(0deg)"};
    }

    div:nth-child(2) {
      opacity: ${(props)=> props.open ? "0" : "1"};
      transform: ${(props)=> props.open ? "rotate(0deg)": "rotate(0deg)"};
    }

    div:nth-child(3) {
      transform: ${(props)=> props.open ? "translateX(5px) rotate(-45deg)": "rotate(0deg)"};
    }
  }
`;

const Burger = (props) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.protoTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger;
