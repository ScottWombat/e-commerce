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

const ProductCard = ({productDetails}) => {
    //const stars=3;
    //const state = useSelector((state) => state);
    //console.log("product")
    //console.log(productDetails)
    const [productId,setProductId] = useState(null);
    const dispatch = useAppDispatch();
   // const product = useSelector((state) => selectProductById(state,'667a8da10d35869504d6bf78'))
    const selectedProduct = useSelector((state) => selectProductById(state,productId))
   
    const [stars, setStars] = useState(0);
    useEffect(() => {
        setStars(productDetails.rating);
    },[])

    //useEffect(() =>{
    //  console.log("EEEEE")
      //let item = {id:'productId',price:props.productDetails.price,key:'1234',qty:1}
      //dispatch(addItem(item))
      //createNotification();
    //},[productId])

    
    const handleCartClick = (e) => {
        setProductId(e.id)
        let item = {id:productDetails.id,
                    name: productDetails.name,
                    full_price:productDetails.full_price,
                    discount_price:+productDetails.discount_price,
                    qty:1
                }
        dispatch(addItem(item))
    }
    let url= `/product-details/${productDetails.catalogue}/${productDetails.category}/${productDetails.id}`;
    return(
        <>
        <div id="toast_view_area"></div>
        <div className={styles.product_card + ' ' + styles.spacing}>
        <div className={styles.dis_ribbon}><span>{productDetails.discount} % Off</span></div>
        <div className={styles.product_thumb}>
        <ProductLink to={url}>
        <img src="/image1.png" />
        </ProductLink>
        </div>
        <div className={styles.product_details}>
            <span className={styles.product_category}>{productDetails.category}</span>
            <div className={styles.product_header}>
                <div>
                <a href="#">{productDetails.name}</a>
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
                        <div className={styles.full_price}>${productDetails.full_price}</div>
                        
                    </div>
                    <div>${productDetails.discount_price}</div>
                </div>
                <div className={styles.product_links}>
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#" onClick={(e) => handleCartClick(productDetails)}><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default ProductCard;