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
    height:25px;
    margin-top:-5px;
    margin-right:120px;
`;
const Container = styled.div`
    display:flex;
    float:left;
`;
const Search = styled.div<SearchProps>`
    width: 25px;
    margin-top:-5px;
    margin-left:0px;
   
`;
const ShoppingBag = styled.div`
    flex-grow: 1;
    margin-top:-8px;
    margin-left:30px;
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