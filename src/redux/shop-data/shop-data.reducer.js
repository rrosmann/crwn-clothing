// import SHOP_DATA from './shop-data';
import SHOP_DATA_REDUCER_ACTION_TYPES from './shop-data.types';

const INITIAL_STATE = {
  fashionCollections: null,
  isFetchingData: false,
  errorMessage: null,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_START: {
      return {
        ...state,
        isFetchingData: true,
      };
    }

    case SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_FAILURE: {
      return {
        ...state,
        isFetchingData: false,
        errorMessage: action.payload,
      };
    }

    case SHOP_DATA_REDUCER_ACTION_TYPES.FETCH_FASHION_COLLECTION_SUCCESS: {
      return {
        ...state,
        fashionCollections: action.payload,
        isFetchingData: false,
      };
    }

    default:
      return state;
  }
};

export default shopDataReducer;
