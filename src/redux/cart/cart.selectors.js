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
      (accumulatedNumberOfItemsInCart, currentCartItem) =>
        accumulatedNumberOfItemsInCart + currentCartItem.quantity,
      0
    )
);

export const totalPriceOfItemsInCartSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedTotalPrice, currentCartItem) =>
        (accumulatedTotalPrice =
          accumulatedTotalPrice +
          currentCartItem.quantity * currentCartItem.price),
      0
    )
);
