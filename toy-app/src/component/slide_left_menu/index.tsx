import { useState } from "react";
import styled, { css } from "styled-components";
import { ShoppingCartIcon } from "../svg/shopping_cart";
import { ShoppingCart } from "../shopping_cart";
interface LeftMenuContainerProps{
    slideout: boolean;
    
}
const LeftMenuContainer = styled.div<LeftMenuContainerProps>`
position:fixed;
width:320px;
height:100vh;
font-size:24px;
top: 0px;
left: 0px;
z-index: 2;
background-color: white;
transition: left 900ms cubic-bezier(.9, 0, .33, 1);
`;

export const SlideLeftMenu = (props:any) =>{
    return (
        <LeftMenuContainer slideout={false}>
           <ShoppingCart/>
        </LeftMenuContainer>
     
    );

}