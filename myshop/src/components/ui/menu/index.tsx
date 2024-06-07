import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.css';
import './slide.module.css';
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
/*
https://codepen.io/Winterfox/pen/wGmEbY
*/
const Submenu = (props) => {

  return (
    
    <ul className={styles.nav__submenu}>
      <li className={styles.nav__submenu_item}>
        <a onClick={(e) => props.clickHandler(e, props.catalog, props.category)}>Our Company</a>
      </li>
      <li className={styles.nav__submenu_item}>
        <a>Our Team</a>
      </li>
      <li className={styles.nav__submenu_item}>
        <a>Our Portfolio</a>
      </li>
    </ul>

  );
}

const Menu = (props) => {
  const componentRef = useRef(null);
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {

  }, [])
  const onClick = (e, catalog, category) => {
    e.preventDefault();
    setShowMenu(false);
    navigate('/content?catalog=Men;category=CockRings');
  };
  const handleHover = (event) => {
    setShowMenu(true)
  };

  const handleLeave = (event) => {
    setShowMenu(false);

  };
  /*
<ul className={styles.menu}>
          <li><a href="#home">FOR HIM</a></li>
          <li><a href="#news">FOR HER</a></li>
          <li><a href="#contact">SALE</a></li>
          <li><a href="#about">NEW ARRIVALS</a></li>
          </ul>
  */

  return (
    <nav>
  <ul className={styles.container + ' ' + styles.ul_reset}>

    <li className={styles.droppable}>
      <a href='#'>FOR HIM</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>Toys for your penis</div>
            <li><a href='#'>Cock Rings</a></li>
            <li><a href='#'>Masturbators</a></li>
            <li><a href='#'>Penis Extenders</a></li>
            <li><a href='#'>Penis Pumps</a></li>
            <li><a href='#'>Flashlights</a></li>
          </ul>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>Toys for your penis</div>
            <li><a href='#'>Cock Rings</a></li>
            <li><a href='#'>Masturbators</a></li>
            <li><a href='#'>Penis Extenders</a></li>
            <li><a href='#'>Penis Pumps</a></li>
            <li><a href='#'>Flashlights</a></li>
          </ul>
        </div>
      </div>
    </li>
   
    <li><a href='#'>HER TOYS</a></li>
    <li><a href='#'>HIS TOYS</a></li>
    <li><a href='#'>COUPLE TOYS</a></li>
    <li><a href='#'>BEST SELLERS</a></li>
    <li><a href='#'>SALE</a></li>
  </ul>
</nav>
  );

}


export default Menu;