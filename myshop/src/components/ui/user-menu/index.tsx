import React, { useState,useEffect, useRef } from 'react'
import UserIcon from 'src/components/svg/user';
import HeartIcon from 'src/components/svg/heart'
import CartIcon from '../cart-icon';
import SearchBox from 'src/components/ui/search-box';
import useDetectResize from 'src/utils/detect-resize';
import { selectProductsCatalogue, selectProductsCategory, } from "src/store/products";
import {useAppSelector } from 'src/store/hooks';
import {
    OptionsContainer,
    OptionLink,
    BagOptionLink
} from './user-menu.styled';
import SearchIcon from 'src/components/svg/search';
const UserMenu = () => {
    const product_catalogue = useAppSelector(selectProductsCatalogue);
    const product_category = useAppSelector(selectProductsCategory);
    const products_url = `/product-list/${product_catalogue}/${product_category}`
    const { isMobile } = useDetectResize();
    const [show, setShow]= useState(isMobile);
    //const [show, setShow]= useState(false);
    return(
        <OptionsContainer>
                <OptionLink to='/'>
                    {show ? <SearchIcon/> : <SearchIcon/>}
                </OptionLink>
                <OptionLink to='/user'>
                   <UserIcon/>
                </OptionLink>
                <OptionLink to='/signin'>
                   <HeartIcon/>
                </OptionLink>
                <BagOptionLink to={products_url}>
                   <CartIcon />
                </BagOptionLink>
        </OptionsContainer>
    )
}

export default UserMenu;