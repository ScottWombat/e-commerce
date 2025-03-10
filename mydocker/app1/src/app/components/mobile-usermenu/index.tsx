import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MagnifyGlass } from 'app/svg/magnify_glass';
import { ShoppingBagIcon } from 'app/svg/bag';
const Container = styled.div`
    width:70px;
    display:inline-block;
    margin-right:15px;;
    text-align:right;
 
`;
const Search = styled.div`
    display:fixed;
    float:right;
    width:35px;
    margin-right:7px;
    padding-top:2px;
`;
const Bag = styled.div`
    float:right;
    display:fixed;
`;

export const SearchLink = styled.a`
    cursor: pointer;
    display:fixed;
`;
export const UserMobileMenu = (props) =>{
    return (
        <Container>
            <Bag onClick={props.cartOnClick}><ShoppingBagIcon width={'25px'} height={'25px'} size={'0'}/></Bag>
            <Search><SearchLink onClick={props.searchOnClick}><MagnifyGlass/></SearchLink></Search>
        </Container>
    )
}