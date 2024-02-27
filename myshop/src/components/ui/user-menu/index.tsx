import React, { useState,useEffect, useRef } from 'react';
import ShoppingBagIcon from 'src/components/svg/shopping-bag';
import UserIcon from 'src/components/svg/user';
import HeartIcon from 'src/components/svg/heart'
import SearchBox from 'src/components/ui/search-box';
import useDetectResize from 'src/utils/detect-resize';
import {
    OptionsContainer,
    OptionLink
} from './user-menu.styled';
import SearchIcon from 'src/components/svg/search';
const UserMenu = () => {
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
                <OptionLink to='/signin'>
                <ShoppingBagIcon />
                </OptionLink>
        </OptionsContainer>
    )
}

export default UserMenu;