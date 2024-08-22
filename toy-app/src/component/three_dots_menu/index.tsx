import styles from './three_dots.module.css'
import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:20px;
    float:right;
   
`;
export const ThreeDotsMenu = () =>{
    return (
        <Wrapper>
        <a href="#" className={styles.dots}>
        <div className={styles.dot}></div>
       </a>  
       </Wrapper> 
    )
}