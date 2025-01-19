import React, { useState ,Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Section, SearchSection, MainSection, FooterSection } from './index.styled';
import { Desktop } from './desktop/index';
import { SearchBox } from '../components/searchbox';
export const Layout = (props) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const searchOnClick = () =>{
        setSearchVisible(!searchVisible)
    }
    return(
        <Container>
            <Section>
                <SearchSection isVisible={searchVisible}>
                    <SearchBox onClose={searchOnClick}/>
                </SearchSection>
                <Desktop onClose={searchOnClick} margin='50px' svgWidth='2.5em' svgHeight='2.5em'/>
                <MainSection>
                    <Suspense fallback={<>loading...</>}>
                        <Outlet/>
                    </Suspense>
                </MainSection>
                <FooterSection>Footer</FooterSection>
            </Section>
        </Container>
    );
}

