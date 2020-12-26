import { createSelector } from 'reselect';

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.itemsInCart
);

export const numberOfItemsInCartSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (numberOfItemsInCart, currentItemInCart) =>
        numberOfItemsInCart + currentItemInCart.quantity,
      0
    )
);
