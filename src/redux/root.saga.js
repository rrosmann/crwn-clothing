import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop-data/shop-data.sagas';

const rootSaga = function* () {
  yield all([call(fetchCollectionsStart)]);
};

export default rootSaga;
