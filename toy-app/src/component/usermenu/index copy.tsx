import styled from "styled-components";
import styles from './usermenu.module.css'
import {ShoppingBagIcon} from 'src/component/svg/bag';

const Wrapper = styled.div`
    width:100%;
    height:20px;
    
    
`;
export const UserMenu = () => {
    const id = "updown_up"
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.fixed}>
                    <svg className={styles.svg_icon + ' ' + styles.search_icon} aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className={styles.search_path} fill="none" stroke="#000"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                </div>
                <div className={styles.flex_item}>
                    <ShoppingBagIcon/>
                </div>

            </div>
        </Wrapper>
    );
}