import { takeEvery, call, put, all } from 'redux-saga/effects';
import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';
import {
  firestore,
  mapFashionCollectionFromFirestoreForReduxState,
} from '../../firebase/firebase.utils';
import {
  fetchFashionCollectionFailure,
  fetchFashionCollectionSuccess,
} from './shop-data.actions';

function* fetchFashionCollectionAsync() {
  try {
    const collectionRef = yield firestore.collection('fashionCollections');
    const querySnapshot = yield collectionRef.get();

    const mappedObjectForReduxState = yield call(
      mapFashionCollectionFromFirestoreForReduxState,
      querySnapshot
    );

    yield put(fetchFashionCollectionSuccess(mappedObjectForReduxState));
  } catch (error) {
    yield put(fetchFashionCollectionFailure(error.errorMessage));
  }
}

function* fetchCollectionsStart() {
  yield takeEvery(
    SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_START,
    fetchFashionCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
