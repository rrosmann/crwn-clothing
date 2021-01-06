import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import userReducer from './user/user.reducer';
import cartDropdownReducer from './cart/cart-dropdown/cart-dropdown.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory-menu/directory-menu.reducer';
import shopDataReducer from './shop-data/shop-data.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartDropdown', 'cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cartDropdown: cartDropdownReducer,
  cart: cartReducer,
  directoryMenu: directoryReducer,
  shopData: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
