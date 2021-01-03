import CART_REDUCER_TYPES from './cart.types';

export const addItemToCart = (item) => ({
  type: CART_REDUCER_TYPES.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CART_REDUCER_TYPES.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CART_REDUCER_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item,
});
