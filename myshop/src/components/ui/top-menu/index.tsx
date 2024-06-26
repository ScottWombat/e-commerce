import styles from './top-menu.module.css'
import { Link } from 'react-router-dom';
const TopMenu = () => {
    return (
        <div className={styles.wrapper}>
	      <ul className={styles.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          </ul>
		</div>
      
    );
}
export default TopMenu;