import CART_REDUCER_TYPES from './cart.types';
import { addItemToCart } from './cart.utils';

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

    default:
      return state;
  }
};

export default cartReducer;
