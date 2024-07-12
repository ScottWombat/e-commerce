import React, { useEffect, useState } from 'react';
import styles from './product-list.module.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import {useSelector, useDispatch} from 'react-redux'
import { addItem } from 'src/store/cart/cartReducer';
import { selectProductById } from 'src/store/products';


const createNotification =()=> {
    const create_notification = document.createElement("div");
  
    create_notification.classList.add("toast_view");
  
    create_notification.innerHTML = `1 item added to your cart`;
    
    const element = document.getElementById('toast_view_area');
    element.appendChild(create_notification);
  
    setTimeout(() => {
      create_notification.remove();
    }, 3000);
  }
  

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
    //const stars=3;
    //const state = useSelector((state) => state);
    const [productId,setProductId] = useState(null);
    const dispatch = useAppDispatch();
   // const product = useSelector((state) => selectProductById(state,'667a8da10d35869504d6bf78'))
    const selectedProduct = useSelector((state) => selectProductById(state,productId))
   
    const [stars, setStars] = useState(0);
    useEffect(() => {
        setStars(props.productDetails.rating);
    },[])

    useEffect(() =>{
      let item = {id:productId,price:props.productDetails.price,key:'123',qty:1}
      dispatch(addItem(item))
      createNotification();
    },[productId])

    
    const handleCartClick = (e) => {
        setProductId(e.id)
    }
    return(
        <>
        <div id="toast_view_area"></div>
        <div className={styles.product_card + ' ' + styles.spacing}>
        <div className={styles.dis_ribbon}><span>{props.productDetails.discount} % Off</span></div>
        <div className={styles.product_thumb}>
        <ProductLink to="/product-details/men/cock_rings">
        <img src="/image1.png" />
        </ProductLink>
        </div>
        <div className={styles.product_details}>
            <span className={styles.product_category}>{props.productDetails.category}</span>
            <div className={styles.product_header}>
                <div>
                <a href="#">{props.productDetails.name}</a>
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
                <div className={styles.product_price}>
                    <div className={styles.price_wrapper}>
                        <div className={styles.price_slash}></div>
                        <div className={styles.full_price}>${props.productDetails.full_price}</div>
                        
                    </div>
                    <div>${props.productDetails.discount_price}</div>
                </div>
                <div className={styles.product_links}>
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#" onClick={(e) => handleCartClick(props.productDetails)}><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default ProductCard;