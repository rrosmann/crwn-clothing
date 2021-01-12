import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';

export const updateFashionCollectionPreviewData = (
  dataObjectForStateUpdate
) => ({
  type: SHOP_DATA_REDUCER_ACTION_TYPES.UPDATE_FASHION_COLLECTION_PREVIEW_DATA,
  payload: dataObjectForStateUpdate,
});

export const fetchFashionCollectionStart = () => ({
  type: SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_START,
});

export const fetchFashionCollectionFailure = (errorMessage) => ({
  type: SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchFashionCollectionSuccess = (
  fetchedFashionCollectionObject
) => ({
  type: SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_SUCCESS,
  payload: fetchedFashionCollectionObject,
});
