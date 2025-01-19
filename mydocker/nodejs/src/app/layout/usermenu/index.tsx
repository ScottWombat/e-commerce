import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { ShoppingBagIcon } from './bag';

import { SearchIcon } from './search_icon';
import { Wrapper,Container,Search,Bag } from "./user.styled";
export const UserMenu = (props:any) => {
    const id = "updown_up"
    const [showBag, setShowBag] = useState(true);
    return (
        <Wrapper>
            <Container>
                <Search marginleft={'10px'}>
                    <a href="#" onClick={props.onClick}><SearchIcon width={props.svgWidth} height={props.svgHeight}/></a>
                </Search>
                {showBag  &&
                <Bag>
                    <Link to='/cart'><ShoppingBagIcon width={props.svgWidth} height={props.svgWidth}/></Link>
                </Bag>
                }
            </Container>
        </Wrapper>
    );
}