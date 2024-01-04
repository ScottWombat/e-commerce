import styles from './menu.module.css'
const Menu = () => (
    <div className={styles.container}>
  <nav className={styles.link}>
    <a href="home">HOME</a>
    <a href="about">ABOUT US</a>
    <a href="services">SERVICES</a>
    <a href="register">REGISTER</a>
    <a href="login">LOGIN</a>
  </nav>
</div>
);

export default Menu;

 