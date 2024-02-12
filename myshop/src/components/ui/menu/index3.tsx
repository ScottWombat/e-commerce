import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.css'
import { useNavigate } from "react-router-dom";
/*
https://codepen.io/Winterfox/pen/wGmEbY
*/

const Menu = (props) => {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const navigate1 = (e, d) => {
    e.preventDefault();
    const userID = 123;
    var slide = document.querySelector(".slide");
    console.log("D")
    console.log(slide)
    navigate('/content');

  };
  return (
    <div className={styles.parent}>
      <div className={styles.slide}>
        <button onClick={ (e) => navigate1(e,"d")}>slide</button>
      </div>
      <div className={styles.slideMenu}>
        <div><a onClick={ (e) => navigate1(e,"d")}>item 1</a></div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
      </div>
    </div>
  );
}


export default Menu;