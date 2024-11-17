import React from "react";
import * as styles from './products.module.css';
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import { addItem } from '../../store/cart/cartReducer';
const Products = ({ productList}) => {
  const dispatch = useAppDispatch();
  const onclick=((name) =>{
    //setName(name)
  })
  const addToCart = product =>{
    console.log(product)
    let item = {id:product.id,price:product.price,key:product.id,qty:1,total:product.price * product *1}
    //dispatch(addItem(item))
    dispatch(addItem(product))
  }
  return (
      <>
      {productList.map(p => (
        <div className={styles.image_wrapper}>
        <div className={styles.image} onClick={() =>onclick('d1')}>
        <img src="/assets/images/img1.jpg" />
        </div>
        <div className={styles.product_title}>{p.title}</div>
        <div className={styles.product_price}>${p.price}</div>
        <div className={styles.product_selection} onClick={()=>addToCart(p)}>ADD TO CART</div>
       </div>
      ))}
      </>
  );
};

export default Products;