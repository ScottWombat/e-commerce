export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { 
            ...cartItem, 
            qty: cartItem.qty + 1 ,
            total: Number.parseFloat((cartItem.price*(cartItem.qty+1)).toFixed(2))
            //total: cartItem.price
          }
          : cartItem
      );
    }
  
  
    return [...cartItems, { ...cartItemToAdd, qty: 1 ,total: cartItemToAdd.price}];
  };
  export const removeItemFromCart = (cartItems, itemId) => {
    return cartItems.filter(cartItem => cartItem.id !== itemId);
  }
  export const removeItemFromCart_old = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };