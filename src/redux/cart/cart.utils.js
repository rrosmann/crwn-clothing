export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    console.log(existingCartItem);
    existingCartItem.quantity = existingCartItem.quantity + 1;
    return cartItems;
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
