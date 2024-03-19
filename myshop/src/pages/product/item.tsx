
import styles from './item.module.css';
const Item = (props) => {
    return (
        <div className={styles.wrapp}>
        <div className={styles.current}>
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="mountain" className={styles.img_inherit}></img>
        </div>
        <div className={styles.thumnail}>
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="tree" className={styles.thumb}></img>
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="forest" className={styles.thumb}></img>
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="cloud" className={styles.thumb}></img>
        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="cloud" className={styles.thumb}></img>
         </div>
     </div>

    );
}

export default Item;