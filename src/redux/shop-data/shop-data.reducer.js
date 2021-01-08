// import SHOP_DATA from './shop-data';
import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';

const INITIAL_STATE = {
  fashionCollections: null,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_DATA_REDUCER_ACTION_TYPES.UPDATE_FASHION_COLLECTION_PREVIEW_DATA: {
      return {
        ...state,
        fashionCollections: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopDataReducer;
