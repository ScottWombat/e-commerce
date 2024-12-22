import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import * as styles from './cart-slider.module.css';
import { Trash } from 'app/svg/trash';
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import { selectAllItems, getAmountInCart ,removeItem} from '../../store/cart/cartReducer'
interface CartSliderProps {
  sidebar: boolean;

}
export const Cart = styled.aside<CartSliderProps>`
    width: 310px;
    height: 100vh;
    display: inline;
    font-family: "Montserrat", sans-serif;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${props => props.sidebar ? '0px' : '-340px'};
    transition: right 0.5s ease-in-out;
    box-shadow: #b0b1b1 0px 0px 0px 1px;
    background-color:white;
  `;

const CartSlider = (props) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  let navigate = useNavigate(); 
  const dispatch = useAppDispatch();
  const amount = useAppSelector(state => getAmountInCart(state));
  const items = []// useAppSelector(state => selectAllItems(state))
  
  useEffect(() => {
        let g = 0;
        items.map(p => {
            g = g + p.price;
        })
        let format_g = (Math.round(g * 100) / 100).toFixed(2);
        setTotal(parseFloat(format_g))
    
});

  const goViewCart = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }
  const goCheckout = () =>{ 
    let path = `/checkout`; 
    navigate(path);
  }
  const onClose=()=>{
    props.onClose();
  }
  const trashClick=(id)=>{
    dispatch(removeItem(id))
    //props.onClose();
  }
  return (
    <Cart sidebar={props.showCartSlider}>
      <div className={styles.wrapper} >
        <div className={styles.view}>
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.cart_bold}>CART</div>
            </div>
            <div className={styles.right}>
             <a className={styles.close} onClick={props.onClose}></a>
            </div>
          </div>
          <div className={styles.description}>
            { amount > 1? amount + ' products in your cart': amount + ' product in your cart'}
          </div>
          <div>&nbsp;</div>
          {items.map(item => (
          <div>  
              <div className={styles.grid_row}>
              <div className={styles.item_title}>{item.title}</div>
              <div><img src="/assets/images/img1.jpg"  className={styles.item_image}/></div>
              </div>
              
              <div className={styles.left_remove}>{item.qty}&nbsp;x &nbsp;$&nbsp;{item.price}</div>
              <div className={styles.right_remove}><a onClick={() => {trashClick(item.id)}}><Trash/></a></div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
          </div>
         
          ))}
          <div>&nbsp;</div>
          <div className={styles.description}>
           Total: ${total}
          </div>
          <div className={styles.grid_row}>
          <div className={styles.button + ' ' + styles.gap} onClick={ () => {goViewCart();onClose();}}>VIEW CART</div>
          <div className={styles.button} onClick={ () => {goCheckout();onClose();}}>CHECKOUT</div>
          </div>
        </div>
      </div>
    </Cart>
  )
}
export default CartSlider;
