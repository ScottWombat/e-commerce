import ShoppingBagIcon from 'src/components/svg/shopping-bag';
import UserIcon from 'src/components/svg/user';
import HeartIcon from 'src/components/svg/heart'
import SearchBox from 'src/components/ui/search-box';
import {
    OptionsContainer,
    OptionLink
} from './user-menu.styled';
const UserMenu = () => {
    return(
        <OptionsContainer>
                <OptionLink to='/'>
                    <SearchBox/>
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