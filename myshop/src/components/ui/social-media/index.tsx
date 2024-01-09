import styles from './social-media.module.css'
const SocialMedia = () => {
    return(
        <>
        <div>login with social media</div>
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
        </>
    );
};

export default SocialMedia;