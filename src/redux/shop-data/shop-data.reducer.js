import SHOP_DATA from './shop-data';
import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';

const INITIAL_STATE = {
  fashionCollections: SHOP_DATA,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_DATA_REDUCER_ACTION_TYPES.UPDATE_FASHION_COLLECTION_PREVIEW_DATA: {
      return {
        ...state,
        firebaseFashionCollections: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopDataReducer;
