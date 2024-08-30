import styled from "styled-components";
import styles from './usermenu.module.css'
import {ShoppingBagIcon} from 'src/component/svg/bag';
import {SearchIcon} from 'src/component/svg/search';
import {Search1Icon} from 'src/component/svg/search1';
interface SearchProps {
    marginLeft?:string
  }
  

const Wrapper = styled.div`
    width:100%;
    height:50px;
    margin-top:0px;
    margin-right:0px;
`;
const Container = styled.div`
    display:flex;
    float:left;
    padding:0px;
`;
const Search = styled.div<SearchProps>`
    width: 50px;
    height:50px;
    display: flex;
    justify-content: center;
    margin-top:35px;
`;
const Search1 = styled.div<SearchProps>`
    width: 50px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ShoppingBag = styled.div`
    width: 50px;
    height:50px;
    flex-grow: 1;
    margin-top:0px;
    margin-left:0px;
    display: flex;
    justify-content: center;
    margin-top:33px;
`;
export const UserMenu = (props:any) => {
    const id = "updown_up"
    
    
    return (
        <Wrapper>
            <Container>
                <Search marginLeft={'10px'}>
                    <a href="#" onClick={props.onClick}><Search1Icon width={props.svgWidth} height={props.svgHeight}/></a>
                </Search>
                <ShoppingBag>
                    <a><ShoppingBagIcon width={props.svgWidth} height={props.svgWidth}/></a>
                </ShoppingBag>
            </Container>
        </Wrapper>
    );
}