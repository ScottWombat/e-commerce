import React, { useState,useEffect } from "react";
import { useAppSelector } from '../../store/hooks';
import { getAmountInCart } from '../../store/cart/cartReducer';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CartSlider from "app/components/cart-slider";
import { ShoppingBagIcon } from './bag';

import { SearchIcon } from './search_icon';
import { Wrapper, Container, Search, Bag } from "./user.styled";
//import * as styles from '../../components/cart-slider/cart-slider.module.css'
export const UserMenu = (props: any) => {
    const amount = useAppSelector(state => getAmountInCart(state));
    const id = "updown_up"
    const [showBag, setShowBag] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    useEffect(() => {
        let showCart = amount===0?false:true;
        setShowBag(showCart);
    });
    const onClose = () => {
        setSidebar(!sidebar);
    }
    return (
        <Wrapper>
            <Container>
                <Search marginleft={'10px'}>
                    <a href="#" onClick={props.onClick}><SearchIcon width={props.svgWidth} height={props.svgHeight} /></a>
                </Search>
                {showBag &&
                    <Bag>
                        {/*<Link to='/cart'><ShoppingBagIcon width={props.svgWidth} height={props.svgWidth}/></Link>*/}
                        <a onClick={onClose}><ShoppingBagIcon width={props.svgWidth} height={props.svgWidth} /></a>
                    </Bag>
                }
            </Container>
           <CartSlider showCartSlider={sidebar} onClose={onClose}/>
        </Wrapper>
    );
}