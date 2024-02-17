import LogoIcon from 'src/components/svg/logo';

import {
    LogoContainer,
    LogoText,
} from './logo.styles';

const Logo = () => {
    return(
        <LogoContainer to='/'>
                <LogoIcon />
                <LogoText>love me sexy </LogoText>
        </LogoContainer>
    )
}

export default Logo;
