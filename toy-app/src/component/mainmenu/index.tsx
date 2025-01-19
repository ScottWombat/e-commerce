import styled from "styled-components";
import styles from './menu.module.css';
export const Wrapper = styled.div`
    width:100%;
    height:25px;
    float:right;
`;


export const MainMenu = () => {
    const id = "updown_up"
    return (
        <Wrapper>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn} >SHOP WOMEN<i className={styles.arrow + ' ' + styles.updown} id={id}></i></button>
                <div className={styles.dropdown_content}>
                    <a className={styles.link} href="#">Link 1</a>
                    <a className={styles.link} href="#">Link 2</a>
                    <a className={styles.link} href="#">Link 3</a>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn} >SHOP MEN<i className={styles.arrow + ' ' + styles.updown} id={id}></i></button>
                <div className={styles.dropdown_content}>
                    <a className={styles.link} href="#">Link 1</a>
                    <a className={styles.link} href="#">Link 2</a>
                    <a className={styles.link} href="#">Link 3</a>
                </div>
            </div>
        </Wrapper>
    );
}

