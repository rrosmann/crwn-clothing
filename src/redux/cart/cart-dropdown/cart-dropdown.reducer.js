import CART_DROPDOWN_REDUCER_TYPES from './cart-dropdown.types';

const INITIAL_STATE = {
  showCartDropdown: false,
};

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_DROPDOWN_REDUCER_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown,
      };

    default:
      return state;
  }
};

export default cartDropdownReducer;
