import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface SearchProps {
    marginLeft?:string
}
  
export const Wrapper = styled.div`
    width:100%;
    height:50px;
    margin-top:0px;
    margin-right:0px;
   
`;
export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
`;
export const Search = styled.div<SearchProps>`
    width: 50px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    margin-right:20px;
`;

export const Bag = styled.div<SearchProps>`
    width: 50px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const Search1 = styled.div<SearchProps>`
    width: 50px;
    height:50px;
    display: flex;
    justify-content: right;
    align-items: center;
`;
export const ShoppingBag = styled.div`
    width: 50px;
    height:50px;
    flex-grow: 1;
    margin-top:0px;
    margin-left:0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:33px;
    background-color:red;
`;