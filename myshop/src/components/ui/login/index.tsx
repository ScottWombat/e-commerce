import React, { useState} from 'react';
import styles from './login.module.css';
import RememberMe from 'src/components/ui/remember-me';
import OrSeperator from 'src/components/ui/or-seperator';
import SocialMedia from 'src/components/ui/social-media';
const LogIn = () => {
	const [active, setActive] = useState(false);
	
	const handleToggle = (e:any) => {   
		setActive(!active);	
	}
	const handleCheck = (e:any) => {
		console.log('d');
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
					<RememberMe/>
					<OrSeperator/>
					<SocialMedia/>
					
				</div>
				
			</div>
				<div>	
					<div className={styles.footer_social_icons}>
    				    <div className={styles.remember} >
							<div className={styles.remember_me}>
							<input type="checkbox" className={styles.checkbox} value="Bike" id='rm1' onChange={(e) => handleCheck(e)}/>
							<label htmlFor='rm1'>Remember me</label>
							</div>
							
							<div><a>Forget password?</a></div>
						</div>
						<div className={styles.demo }><div className={styles.or + " " + styles.or_x}>or</div></div>
						<div className={styles.with_password}>login with social media</div>
						<div className={styles.social_icons}>
    					<ul className={styles.ul_social_icons}>
        				<li className={styles.li_social_icons}><a href="" className={styles.a_fa_facebook}> <i className="fa fa-facebook"></i></a></li>
        				<li className={styles.li_social_icons}><a href=""> <i className="fa fa-twitter"></i></a></li>
        				<li className={styles.li_social_icons}><a href=""> <i className="fa fa-rss"></i></a></li>
        				<li className={styles.li_social_icons}><a href=""> <i className="fa fa-youtube"></i></a></li>
        				<li className={styles.li_social_icons}><a href=""> <i className="fa fa-linkedin"></i></a></li>
        				<li className={styles.li_social_icons}><a href=""> <i className="fa fa-github"></i></a></li>
    					</ul>
						</div>
					</div>
		        </div>
	       
        </section>
    );
};
export default LogIn;