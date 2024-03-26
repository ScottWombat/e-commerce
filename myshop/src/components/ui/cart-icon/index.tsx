import { CartContainer, ShoppingIcon ,ItemCountContainer} from "./cart-icon.styles";
import { useSelector } from 'react-redux';
import { getAmountInCart,} from "src/store/cart/cartReducer";
const CartIcon = () => {
   const amount = useSelector(state => getAmountInCart(state))


   return (
   <CartContainer>
      <ShoppingIcon/>
      <ItemCountContainer>{amount === 0?'':amount}</ItemCountContainer>
   </CartContainer> 
   );
}

export default CartIcon;