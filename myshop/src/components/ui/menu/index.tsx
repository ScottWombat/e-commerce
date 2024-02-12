import React, { useState,useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from './menu.module.css'
import { useNavigate} from "react-router-dom";
/*
https://codepen.io/Winterfox/pen/wGmEbY
*/

const Menu = (props) => {
  const componentRef = useRef(null);
  let navigate = useNavigate(); 
  const [showMenu, setShowMenu] = useState(true);
  useEffect(()=>{
   
    },[])
  const navigate1 = (e ,d) => {
    e.preventDefault();
    if ( componentRef.current) {
      
      //componentRef.current.style.display='none'
      
    }
    navigate('/content?catalog=Men;category=CockRings');

  };
  return(
    <nav>
    <div className={styles.container}>
    <ul className={styles.menu_main}>
      <li>
          <a href='#'>Home</a>
         
          <div className={styles.menu_sub} ref={componentRef}>
                      <div className={styles.menu_col_1}>
                          <h3>Category</h3>
                          <ul>
                              <li>
                              <a onClick={ (e) => navigate1(e,"d")}>Link 02</a>
                              </li>
                              <li>
                              <Link to="/content" className={styles.homeLink}><li>Home</li></Link>
                              </li>
                              <li><a href="#">Link 03</a></li>
                          </ul>
                      </div>
          </div>
          
      </li>
      <li><a href='#'>Sale</a></li>
    </ul>
    </div>
  </nav>
  );

}


export default Menu;