import React from "react";
import { bool } from 'prop-types';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import TreeView from "../tree-view";

//transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};

interface props{
    open: boolean
}
const StyledMenu = styled.nav<props>`
  display: flex;
  flex-direction: column;
  background: #effffa;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 50vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: ${props => props.open ? '0px' : '-400px'};
  transition: transform 0.3s ease-in-out;
  padding: 2rem;
  background-color:#6F7084;
  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

/*
 <a onClick={() => props.setOpen(!props.open)}>Click</a>
*/
const MenuItem = (props) => {
  return (
    <StyledMenu open={props.open} >
    <TreeView open={props.open} setOpen={props.setOpen}/>
  </StyledMenu>
  );
};



export default MenuItem;