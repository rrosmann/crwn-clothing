export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity = existingCartItem.quantity + 1;
    // return a new Array-Object, otherwise no state change is notified by React.
    return Array.from(cartItems);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
