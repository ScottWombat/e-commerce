import styles from './top-menu.module.css'
import { Link } from 'react-router-dom';
const TopMenu = () => {
    return (
        <div className={styles.wrapper}>
	    <ul className={styles.menu}>
		<li><Link to="/member-login">Join Us</Link></li>
		<li><Link to='/cart'>Log in</Link></li>
		<li><a href="#">Help</a></li>
	    </ul>
       </div>
    );
}
export default TopMenu;