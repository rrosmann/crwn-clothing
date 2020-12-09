import CART_REDUCER_TYPES from './cart.types';

export const addItemToCart = (item) => ({
  type: CART_REDUCER_TYPES.ADD_ITEM_TO_CART,
  payload: item,
});
