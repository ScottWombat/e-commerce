import styles from './checkout.module.css'
const Checkout = (props) => {
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
            right
        </div>
    </div>
    );
}

export default Checkout;