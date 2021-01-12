import CART_REDUCER_TYPES from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  itemsInCart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_REDUCER_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        itemsInCart: addItemToCart(state.itemsInCart, payload),
      };

    case CART_REDUCER_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        itemsInCart: removeItemFromCart(state.itemsInCart, payload),
      };

    case CART_REDUCER_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (itemInCart) => itemInCart.id !== payload.id
        ),
      };

    case CART_REDUCER_TYPES.CLEAR_CART:
      return {
        ...state,
        itemsInCart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
