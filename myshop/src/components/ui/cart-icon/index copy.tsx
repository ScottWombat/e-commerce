import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { CartContainer, ShoppingIcon ,ItemCountContainer,CartSlider} from "./cart-icon.styles";
//import { useSelector } from 'react-redux';
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import { getAmountInCart,getTotalPrice,selectAllItems} from "src/store/cart/cartReducer";
import styles from './cart-icon.module.css';

const CartIcon = () => {
   const amount = useAppSelector(state => getAmountInCart(state))
   const total = useAppSelector(state => getTotalPrice(state))
   const allItems = useAppSelector(state => selectAllItems(state))
   const [sidebar, setSidebar] = useState(false)
   const [grandTotal,setGrandTotal] = useState('')
   
   
   
   //useEffect(() => {
     
      //const totalPrice = useAppSelector(state => getTotalPrice(state))
      //const re = /^\d[1-9]+(\.\d{0,1})?$/;
      //let val = "" + t`otalPrice;
      //console.log("Card}")
      //console.log(totalPrice)
      //console.log(val)
      //if (re.test(val)){
      //      val = val + "0";
      //      setGrandTotal(val);
      //}
      
  //},[totalPrice])
   
   
  

   

  
 
   
   //console.log("all")
   //console.log(allItems)
   //{allItems.map((x, i) => {
   //   console.log(x)
   //})}
   const formatGrandTotal = () =>{
      let totalStr = ""+total;
      const re = /^[1-9]\d{0,3}\.\d{2}$/;
      
      if (!re.test(totalStr)){
           console.log(totalStr)
           let format = totalStr+"0"
           console.log(format)
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
   const handleClick = () =>{
      if(counter===1){
         setCounter(1)
      }else{
         setCounter(counter-1)
      }
   }
   return (
   <>
   <CartContainer onClick={()=>showSidebar()}>
      <ShoppingIcon />
      <ItemCountContainer> {amount === 0?'':amount}</ItemCountContainer>
   </CartContainer> 
   
   <CartSlider sidebar={sidebar}>
       <div className={styles.cart_header_section}>
       <h2 className={styles.bag_header}>Shopping Bag1 <span className={styles.count}>1</span></h2>
       <a className={styles.close_button} onClick={()=>showSidebar()}><span className={styles.close_icon}>X</span></a>
       </div>
       <div className={styles.product_section}>
         <ul className={styles.products}>
            <li className={styles.product}>
            <a href="#" className={styles.product_link}>
               <div>
					<span className={styles.product_image}>
						<img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="Product Photo"/>
					</span>
               </div>
               <span className={styles.product_details}>
						<div className={styles.product_details_header}>Very Cool Product One</div>
						<span className={styles.product_qty_price}>
                  <span className={styles.product_qty}>
                     <button className={styles.minus_button} onClick={() => handleClick()}>-</button>
                     <input value={counter} className={styles.product_qty_input} readOnly={true}/>
                     <button className={styles.plus_button} onClick={() => setCounter(counter + 1)}>+</button>
                  </span>
                  <div className={styles.price_section}>
                     <span className={styles.wrapper}><span className={styles.slashed}>$20.00</span></span>
                     <span className={styles.product_price}>$16.00</span>
                  </div>
						</span>
					</span>
				</a>
				<a href="#remove" className={styles.remove_button}><span className={styles.remove_icon}>X</span></a>
            </li>
         </ul>
         <div className={styles.cart_totals}>
			   <div className={styles.cart_subtotal}>
				   <span className={styles.label}>Subtotal:</span> <span className={styles.amount}>${grandTotal}</span>
			   </div>
		   </div>
         <div className={styles.action_buttons}>
			   <a className={styles.view_cart_button} href="#">Buy Now</a>
            <Link to='/checkout' className={styles.checkout_button} onClick={checkOut}>Checkout</Link>
		   </div>
       </div>
       
   </CartSlider>
   </>
   );
}

export default CartIcon;