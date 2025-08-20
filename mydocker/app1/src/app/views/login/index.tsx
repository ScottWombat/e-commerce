import React, { useState } from 'react';
import * as styles from './index.module.css';

const LoginView = () => {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
            return;
        }
    };
    
    return (
        <div className={styles.wrapper1}>
            <div className={type=='signUp'?styles.container + " " + styles.right_panel_active: styles.container} id="container">
                <div className={`${styles.form_container} ${styles.sign_up_container}`}>
                    <form action="#">
                        <h1>Create Account 🚀</h1>
                        <div className={styles.social_container}>
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="👤 Name" required />
                        <input type="email" placeholder="📧 Email" required/>
                        <input type="password" placeholder="🔒 Password" required/>

                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className={`${styles.form_container} ${styles.sign_in_container}`}>
                    <form action="#">
                        <h1>Sign In 👋</h1>
                        <div className={styles.social_container}>
                            <a href="#" className='social'><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className='social'><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className='social'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="📧 Email" required/>
                        <input type="password" placeholder="🔒 Password" required/>
                        <a href="#">Forgot your password? 🤔</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className={styles.overlay_container}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
                            <h1>Welcome Back! 🎉</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles.ghost} id="signIn" onClick={()=> handleOnClick('signIn')}>Sign In</button>
                        </div>
                        <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
                            <h1>Hello, Friend! ✨</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className={styles.ghost} id="signUp" onClick={()=> handleOnClick('signUp')}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginView;