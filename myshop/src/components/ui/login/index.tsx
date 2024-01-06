import React, { useState} from 'react';
import styles from './login.module.css';

const LogIn = () => {
	const [active, setActive] = useState(false);
	
	const handleToggle = (e:any) => {   
		console.log(active);
		//setActiveSignIn(!activeSignIn);

		setActive(!active);
		
	}
	
    return(
        <section>
			
	        <div className={styles.page}>
		        <div className={active ? styles.welcome + ' ' + styles.active : styles.welcome}>
			        <h2>Welcome Back!</h2>
			        <p>Hello Dear, I am Robin Gautam. How it is?</p>
			        <button className={active ? styles.sign_in + ' ' + styles.active : styles.sign_in} onClick={e => handleToggle(e)} value='dd'>Sign In</button>
			        <button className={active ? styles.btn + ' ' + styles.active : styles.btn } onClick={e => handleToggle(e)} value='SignUp'>Sign Up</button>
		        </div>
		        <div className={active ? styles.sign_up + ' ' + styles.active : styles.sign_up}>
			        <form method="POST" action="signup_user.php">
			            <h2>Sign Up your Account</h2>
			            <input type="text" name="name" placeholder="Full Name" required/><br/>
			            <input type="email" name="email" placeholder="Email" required/><br/>
			            <input type="password" name="password" placeholder="Password" required/><br/>
			            <input type="submit" name="sign_up" value="Sign Up" className={active ? styles.up+ ' ' + styles.active: styles.up }/>
		            </form>
	            </div>
	            <div className={active ? styles.login + ' ' + styles.active : styles.login}>
			        <form method="POST" action="login_user.php">
			            <h2>Login your Account</h2>
			            <input type="email" name="email" placeholder="Email" required/><br/>
			            <input type="password" name="password" placeholder="Password" required/><br/>
			            <input type="submit" name="sign_in" value="Sign In" className={active ? styles.in + ' ' + styles.active : styles.in}/>
		            </form>
		        </div>
	        </div>
        </section>
    );
};
export default LogIn;