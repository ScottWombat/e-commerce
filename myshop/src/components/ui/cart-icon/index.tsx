import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { CartContainer, ShoppingIcon ,ItemCountContainer,CartSlider} from "./cart-icon.styles";
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import { getAmountInCart,getTotalPrice,selectAllItems} from "src/store/cart/cartReducer";
import styles from './cart-icon.module.css';
import { removeItem,increaseQty,decreaseQty } from 'src/store/cart/cartReducer';
//import { all } from 'axios';

const CartIcon = () => {
   const dispatch = useAppDispatch();
   const amount = useAppSelector(state => getAmountInCart(state))
   const total = useAppSelector(state => getTotalPrice(state))
   const allItems = useAppSelector(state => selectAllItems(state))
   const [sidebar, setSidebar] = useState(false)
   const [grandTotal,setGrandTotal] = useState('')
   
   useEffect(() => {
      formatGrandTotal()
   },[total])

   useEffect(() => {
     if (sidebar && amount===0){
        setTimeout(() =>{
         setSidebar(!sidebar)
        },200)
        
     }
   },[amount])
 
   const formatGrandTotal = () =>{
      let totalStr = ""+total;
      const re = /^[1-9]\d{0,3}\.\d{2}$/;
      //console.log("total")
      //console.log(total)
      if (!re.test(totalStr)){
           let format = totalStr+"0"
           setGrandTotal(format);
      }else{

         setGrandTotal(totalStr);
      }
   }

   const showSidebar = () => {
      formatGrandTotal();
      setSidebar(!sidebar);
      
   }
   const [counter, setCounter] = useState(1);
   const navigate = useNavigate()
  
   const checkOut=()=>{
      
      setSidebar(!sidebar);
      let path = `/checkout`; 
      navigate(path);
   }
   const minusClick = (id,qty,price) =>{
     
      if (qty ==1){
         return;
      }
      dispatch(decreaseQty({'id':id,'price':price}))
   }

   const plusClick = (id,price) =>{
      dispatch(increaseQty({'id':id,'price':price}))
      //formatGrandTotal();
   }
   const removeCartItem = (id) =>{
      dispatch(removeItem(id))
      
   }

   return (
   <>
   <CartContainer onClick={()=>showSidebar()}>
      <ShoppingIcon />
      <ItemCountContainer> {amount === 0?'':amount}</ItemCountContainer>
   </CartContainer> 
   
   <CartSlider sidebar={sidebar}>
       <div className={styles.cart_header_section}>
         <h2 className={styles.bag_header}>Shopping Bag <span className={styles.count}>1</span></h2>
         <a className={styles.close_button} onClick={()=>showSidebar()}><span className={styles.close_icon}>X</span></a>
       </div>
       <div className={styles.product_section}>
      
       <ul className={styles.products}>
           {allItems.map((item)=>
            <li className={styles.product}>
            <a href="#" className={styles.product_link}>
               <div>
					<span className={styles.product_image}>
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Product Photo"/>
					</span>
               </div>
               <span className={styles.product_details}>
						<div className={styles.product_details_header}>{item.name}</div>
						<span className={styles.product_qty_price}>
                 
                  <div className={styles.price_section}>
                     <span className={styles.wrapper}><span className={styles.slashed}>${item.full_price}</span></span>
                     <span className={styles.product_price}>${item.discount_price}</span>
                  </div>
                  <span className={styles.product_qty}>
                     <button className={styles.minus_button} onClick={() => minusClick(item.id,item.qty,item.discount_price)}>-</button>
                     <input value={item.qty} className={styles.product_qty_input} readOnly={true}/>
                     <button className={styles.plus_button} onClick={() => plusClick(item.id,item.discount_price)}>+</button>
                  </span>
                 
						</span>
                  <span className={styles.product_total}>Total:&nbsp;&nbsp;{item.total}</span>
					</span>
				</a>
				<a href="javascript:void(0)" onClick={() => removeCartItem(item.id)} className={styles.remove_button}><span className={styles.remove_icon}>X</span></a>
            </li>
           )}
         </ul>
         
         <div className={styles.cart_totals}>
			   <div className={styles.cart_subtotal}>
				   <span className={styles.label}>Grand Total:</span> <span className={styles.amount}>${grandTotal}</span>
			   </div>
		   </div>
         <div className={styles.action_buttons}>
			   <a className={styles.view_cart_button} href="#">Continue Shopping</a>
            <Link to='/checkout' className={styles.checkout_button} onClick={checkOut}>Checkout</Link>
		   </div>
       </div>
       
   </CartSlider>
   </>
   );
}

export default CartIcon;