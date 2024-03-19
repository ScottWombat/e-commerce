import styles from './product-list.module.css'
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;


const ProductCard = (props) => {
    const stars=2;
    return(
        <div className={styles.product_card + ' ' + styles.spacing}>
        <div className={styles.dis_ribbon}><span>35 % Off</span></div>
        <div className={styles.product_thumb}>
        <ProductLink to="/product-details/men/cock_rings">
        <img src="https://cdn-icons-png.flaticon.com/512/2806/2806251.png" />
        </ProductLink>
        </div>
        <div className={styles.product_details}>
            <span className={styles.product_category}>T-Shirt</span>
            <div className={styles.product_header}>
                <div>
                <a href="#">New T-Shirt For Man</a>
                </div>
                <div className={styles.product_header_star}>
                {[...Array(5)].map((e, index) => 
                (stars <= index)?
                    <i className="fa fa-star" aria-hidden="true" style={{color:'#ccc'}}></i>
                :
                    <i className="fa fa-star" aria-hidden="true" style={{color:'#FF5F1F'}}></i>
                
                )}
                </div>
            </div>
            <div className={styles.product_desc}>New Import T-Shirt For Man Very Rare Collection, If You Want Order Right Now</div>
            <div className={styles.product_bottom_details}>
                <div className={styles.product_price}><small>$15.10</small>$7.99</div>
                <div className={styles.product_links}>
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#"><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;