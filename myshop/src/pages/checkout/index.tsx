import styles from './checkout.module.css';
import Paypal from 'src/components/svg/paypal';
import { useNavigate} from "react-router-dom";
const Checkout = (props) => {
    
    const navigate = useNavigate()
    const handleClick = (guest_member) =>{
        console.log(guest_member)
        let path = guest_member==='member'?'/member_login':'/guest_login';

        navigate(path);
    }
    return (
    <div className={styles.checkout_container}>
        <div className={styles.left_container}>
            <div className={styles.product_header}>Bag</div>
            <div className={styles.product_image}>
            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Product Photo"/>
            </div>
            <div className={styles.product_details}>
                <div className={styles.product_details_info}>
                    <div style={{marginLeft:'5px'}}>Nike Air Max Dn</div>
                    <div style={{marginLeft:'5px'}}>Men's Shoes</div>
                    <div style={{marginLeft:'5px'}}>Black/Dark Smoke Grey/Anthracite/Light Crimson</div>
                    <div style={{marginLeft:'5px'}}>
                    <i className="fa fa-heart fa-lg"></i>&nbsp;
                    <i className="fa fa-trash fa-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right_container}>
            <div className={styles.product_summary}>
                Summary
            </div>
            <div className={styles.product_subtotal}>
                Subtotal
            </div>
            <div className={styles.product_price}>
                $123
            </div>
            <div className={styles.product_delivery}>
                Estimated Delivery & Handling
            </div>
            <div className={styles.product_delivery_charge}>
                Free
            </div>
            <div className={styles.line1}>&nbsp;</div>
            <div className={styles.product_total}>
                Total
            </div>
            <div className={styles.product_total_price}>
                $123
            </div>
            <div className={styles.line2}>&nbsp;</div>
            <div className={styles.guest_checkout}>
                <div className={styles.button_box}>
                    <button className={styles.round} onClick={() =>handleClick('guest')}>Guest Checkout</button>
                </div>
            </div>
            <div className={styles.member_checkout}>
                <div className={styles.button_box}>
                    <button className={styles.round} onClick={() =>handleClick('member')}>Member Checkout</button>
                </div>
            </div>
            <div className={styles.paypal}>
                <div className={styles.button_box}>
                    <button className={styles.round1}>
                        <Paypal/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Checkout;