import React, { useState,useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from  './menu.module.css';
import './slide.module.css';
import { useNavigate} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
/*
https://codepen.io/Winterfox/pen/wGmEbY
*/
const Submenu =(props) =>{
 
  return (
    
    <ul className={styles.nav__submenu}>
    <li className={styles.nav__submenu_item}>
      <a onClick={ (e) => props.clickHandler(e,props.catalog, props.category)}>Our Company</a>
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
  useEffect(()=>{
   
    },[])
  const onClick = (e ,catalog,category) => {
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

  return(
    <nav className={styles.nav}>
    <ul className={styles.nav__menu}>
      <li className={styles.nav__menu_item}>
        <a>Home</a>
      </li>
      <li className={styles.nav__menu_item} onMouseLeave={ (e) => handleLeave(e)}>
        <a onMouseEnter={(e) => handleHover(e)}>
          For him
        </a>
        {showMenu &&
        <div className={styles.submenu_container}>
          <CSSTransition classNames="slide"  timeout={300}>
            <Submenu clickHandler={onClick} catalog="Men" category='CockRings' /> 
          </CSSTransition>
        </div>
        }
      </li>
      <li className={styles.nav__menu_item}>
        <a>For her</a>
      </li>
      <li className={styles.nav__menu_item}>
        <a>Sale</a>
      </li>
      <li className={styles.nav__menu_item}>
        <a>New Arrivals</a>
      </li>
    </ul>
  </nav>
  );

}


export default Menu;