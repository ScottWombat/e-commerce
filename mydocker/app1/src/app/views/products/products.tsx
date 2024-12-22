import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from './products.module.css';
import * as styles2 from './modal.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItem,getAmountInCart } from '../../store/cart/cartReducer';
import Modal from "react-awesome-modal";
const Products = ({ productList }) => {
  let navigate = useNavigate(); 
  const [visible, setVisible] = useState(false)
  const amount = useAppSelector(state => getAmountInCart(state));
  const [product,setProduct] = useState({'title':'','description':'','price':0});
  const dispatch = useAppDispatch();
  const onclick = ((name) => {
    //setName(name)
  })
  const addToCart = product => {
    console.log("Product")
    console.log(product)
    //let item = {id:product.id,price:product.price,key:product.id,qty:1,total:product.price * product *1}
    //dispatch(addItem(item))
    dispatch(addItem(product))
    openModal(product)
    setTimeout(function() {
      setVisible(false)
    }, 5000);
   
  }
  const openModal = (p) => {
    setVisible(!visible)
    const z = Object.assign({}, p);
    setProduct(z)
  }
  const onViewBag = () =>{
    let path = `/cart`; 
    navigate(path);
  }
  const onViewBag1 = () =>{
    let path = `/viewbag`; 
    navigate(path);
  }

  const onCheckout = () =>{
    let path = `/checkout`; 
    navigate(path);
  }
 

  return (
    <>
      {productList.map(p => (
        <div className={styles.image_wrapper}>
          <div className={styles.image} onClick={() => onclick('d1')}>
            <img src="/assets/images/img1.jpg" />
          </div>
          <div className={styles.product_title}>{p.title}</div>
          <div className={styles.product_price}>${p.price}</div>
          <div className={styles.product_selection} onClick={() => addToCart(p)}>ADD TO CART</div>
        </div>
      ))}
      <Modal
        visible={visible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={openModal}
      >
        <div>
          <div className={styles2.wrapper}>
              <div className={styles2.checkmark_loader}>
                   <div className={styles2.checkmark}></div>
              </div>
              <div className={styles2.title}>Added to Bag</div>
              <div className={styles2.close} onClick={openModal}></div>
          </div>
          <div className={styles2.wrapper2}>
            <div className={styles2.left}>
            <img src="/assets/images/img1.jpg"  className={styles2.item_image}/>
            </div>
            <div className={styles2.right}>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>$&nbsp;{product.price}</div>
            </div>
          </div>
          <div className={styles2.wrapper3}>
          
          <button className={styles2.button} onClick={onViewBag}>View Bag({amount})</button>
          <button className={styles2.button} onClick={onViewBag1}>View Bag({amount})</button>
          </div>
          <div className={styles2.wrapper4}>
          <div><button className={styles2.button2} onClick={onCheckout}>Checkout</button></div>
          </div>
        </div>
      </Modal >
    </>
  );
};

export default Products;