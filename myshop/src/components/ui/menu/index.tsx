import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.css';

import { useNavigate } from "react-router-dom";

/*
https://codepen.io/Winterfox/pen/wGmEbY
*/


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


  return (
    <nav>
    <ul className={styles.container + ' ' + styles.ul_reset}>

    <li className={styles.droppable}>
      <a href='#'>FOR HIM</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>MALE SEX TOYS</div>
            <li className={styles.align_li}><a href='#'>Cock Rings</a></li>
            <li className={styles.align_li}><a href='#'>Masturbators</a></li>
            <li className={styles.align_li}><a href='#'>Penis Extenders</a></li>
            <li className={styles.align_li}><a href='#'>Penis Pumps</a></li>
            <li className={styles.align_li}><a href='#'>Flashlights</a></li>
          </ul>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>Toys for your penis</div>
            <li className={styles.align_li}><a href='#'>Cock Rings</a></li>
            <li className={styles.align_li}><a href='#'>Masturbators</a></li>
            <li className={styles.align_li}><a href='#'>Penis Extenders</a></li>
            <li className={styles.align_li}><a href='#'>Penis Pumps</a></li>
            <li className={styles.align_li}><a href='#'>Flashlights</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li className={styles.droppable}>
      <a href='#'>FOR HER</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>VIBRATORS</div>
            <li className={styles.align_li}><a href='#'>Clitoral vibrators</a></li>
            <li className={styles.align_li}><a href='#'>Rabbit Vibrators</a></li>
            <li className={styles.align_li}><a href='#'>G-spot vibrators</a></li>
            <li className={styles.align_li}><a href='#'>Dual Vibrators</a></li>
            <li className={styles.align_li}><a href='#'>Mini & Bullet Vibrators</a></li>
            <li className={styles.align_li}><a href='#'>Air Pulse Stimulators</a></li>
            <li className={styles.align_li}><a href='#'>Thrusting Vibrators</a></li>
          </ul>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>DILDOS</div>
            <li><a href='#'>Classic Dildos</a></li>
            <li><a href='#'>Vibrating dildos</a></li>
            <li><a href='#'>Suction Cup Dildos</a></li>
          </ul>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>ESSENTIALS</div>
            <li><a href='#'>Arousal Oils & Creams</a></li>
            <li><a href='#'>Lubricants</a></li>
            <li><a href='#'>Sex Toy Cleaners</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li className={styles.droppable}>
      <a href='#'>FOR GAY</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>Toys for your penis</div>
            <li className={styles.align_li}><a href='#'>Cock Rings</a></li>
            <li className={styles.align_li}><a href='#'>Masturbators</a></li>
            <li className={styles.align_li}><a href='#'>Penis Extenders</a></li>
            <li className={styles.align_li}><a href='#'>Penis Pumps</a></li>
            <li className={styles.align_li}><a href='#'>Flashlights</a></li>
          </ul>
        </div>
      </div>
    </li>
    <li className={styles.droppable}>
      <a href='#'>ANAL TOYS</a>
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
    <li className={styles.droppable}>
      <a href='#'>DILDOS</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>ANAL TOYS</div>
            <li><a href='#'>Douches & Enemas</a></li>
            <li><a href='#'>Butt Plugs</a></li>
            <li><a href='#'>Beads</a></li>
            <li><a href='#'>Prostate Messagers</a></li>
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
    <li className={styles.droppable}>
      <a href='#'>VIBRATORS</a>
      <div className={styles.mega_menu}>
      	<div className={styles.container1 + ' ' + styles.ul_reset}>
          <ul className={styles.ul_reset}>
            <div className={styles.header}>Toys for your penis</div>
            <li className={styles.align_li}><a href='#'>Cock Rings</a></li>
            <li className={styles.align_li}><a href='#'>Masturbators</a></li>
            <li className={styles.align_li}><a href='#'>Penis Extenders</a></li>
            <li className={styles.align_li}><a href='#'>Penis Pumps</a></li>
            <li className={styles.align_li}><a href='#'>Flashlights</a></li>
          </ul>
        </div>

      </div>
    </li>
    <li className={styles.droppable}>
      <a href='#'>BONDAGE</a>
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
    <li className={styles.droppable}>
      <a href='#'>LUBE & ESSENTIALS</a>
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
  </ul>
</nav>
  );

}


export default Menu;