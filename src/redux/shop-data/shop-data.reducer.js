import SHOP_DATA from './shop-data';

const INITIAL_STATE = {
  fashionCollections: SHOP_DATA,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default shopDataReducer;
