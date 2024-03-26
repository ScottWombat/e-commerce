//import { ReactComponent as Logo } from 'src/assets/logo.svg';
import LogoIcon from 'src/components/svg/logo';
import ShoppingBagIcon from 'src/components/ui/cart-icon/shopping-bag';
import UserIcon from 'src/components/svg/user';
import HeartIcon from 'src/components/svg/heart'
import SearchBox from 'src/components/ui/search-box';
import {
    HeaderContainer,
    LogoContainer,
    LogoText,
    OptionsContainer,
    OptionLink
} from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <LogoIcon />
                <LogoText>love me sexy </LogoText>
            </LogoContainer>
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
        </HeaderContainer>
    )
}

export default Header;