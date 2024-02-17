import styles from './scroll-menu.module.css'
import Marquee from 'src/components/ui/marquee'

const ScrollText = () => {
    return(
     <div className={styles.animate_contain}>
		<div className={styles.animated_text}>
			<span>Join the club Get rewarded&nbsp;<i className="fa fa-chevron-down"></i></span>
			<span>Free RETURNS</span>
			<span>Pay in four instaallments with afterpay</span>
         
		</div>
	</div>
    )
}

export default ScrollText;

