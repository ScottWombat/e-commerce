import  {useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import styles from './usermenu.module.css'
import {ShoppingBagIcon} from 'src/component/svg/bag';
import {SearchIcon} from 'src/component/svg/search';
import {Search1Icon} from 'src/component/svg/search1';
import { Wrapper,Container,Search,Bag } from "./user.styled";
export const UserMenu = (props:any) => {
    const id = "updown_up"
    const [showBag, setShowBag] = useState(true);
    return (
        <Wrapper>
            <Container>
                <Search marginLeft={'10px'}>
                    <a href="#" onClick={props.onClick}><Search1Icon width={props.svgWidth} height={props.svgHeight}/></a>
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