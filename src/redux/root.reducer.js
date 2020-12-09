import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartDropdownReducer from './cart/cart-dropdown/cart-dropdown.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cartDropdown: cartDropdownReducer,
  cart: cartReducer,
});
