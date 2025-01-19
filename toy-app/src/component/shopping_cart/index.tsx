import styles from './shopping_cart.module.css'
import { ShoppingCartIcon } from '../svg/shopping_cart';
import { CartSVG } from '../svg/cart';
import { SearchIcon } from '../svg/search';
export const ShoppingCart = ()=>{
    return (
        <a href='#' className={styles.cart_toggle}>
            
            <CartSVG/>
            <span className={styles.count_items}>1</span>
        </a>
    )
}