import React, { useEffect } from 'react';
import styled from "styled-components";
import styles from './button-menu.module.css'
import { Link } from 'react-router-dom';
const Link1 = styled(Link)`
  cursor: pointer;
  &:hover {
    text-decoration: underline 0.15em rgb(0,0,0,1);
  }
`;

const ButtonMenu = () => {

  return (
    <div className={styles.container}>

      <div className={styles.img1}>
        <div className={styles.con1}>
          <Link1 to='/product-list/Cock Rings'>
          <img src="black_anal.png" className={styles.img2} alt="" />
          <div className={styles.text_block}>
            <p className={styles.underline}>Cock Rings</p>
          </div>
          </Link1>
        </div>
        <div className={styles.con1}>
          <img src="black_anal.png" className={styles.img2} alt="" />
          <div className={styles.text_block}>
            <p>Vibrators</p>
          </div>
        </div>
        <div className={styles.con1}>
          <img src="black_anal.png" className={styles.img2} alt="" />
          <div className={styles.text_block}>
            <p>Anal Toys</p>
          </div>
        </div>
        <div className={styles.con1}>
          <img src="black_anal.png" className={styles.img2} alt="" />
          <div className={styles.text_block}>
            <p>Dildos</p>
          </div>
        </div>
        <div className={styles.con1}>
          <img src="black_anal.png" className={styles.img2} alt="" />
          <div className={styles.text_block}>
            <p>Prostate Massagers</p>
          </div>
        </div>

      </div>
    </div>




  );
}

export default ButtonMenu;