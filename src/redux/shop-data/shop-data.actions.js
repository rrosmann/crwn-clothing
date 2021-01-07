import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';

export const updateFashionCollectionPreviewData = (
  dataObjectForStateUpdate
) => ({
  type: SHOP_DATA_REDUCER_ACTION_TYPES.UPDATE_FASHION_COLLECTION_PREVIEW_DATA,
  payload: dataObjectForStateUpdate,
});
