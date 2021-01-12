import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop-data/shop-data.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

const rootSaga = function* () {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
};

export default rootSaga;
