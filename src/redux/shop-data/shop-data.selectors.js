import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const shopDataSelector = (state) => state.shopData;

export const fashionCollectionsSelector = createSelector(
  [shopDataSelector],
  (shopData) => shopData.fashionCollections
);

export const fashionCollectionsPreviewSelector = createSelector(
  [fashionCollectionsSelector],
  (fashionCollection) =>
    fashionCollection
      ? Object.keys(fashionCollection).map((key) => fashionCollection[key])
      : []
);

export const fashionCollectionSelector = memoize((fashionCollectionName) =>
  createSelector([fashionCollectionsSelector], (fashionCollections) =>
    fashionCollections ? fashionCollections[fashionCollectionName] : null
  )
);

// https://stackoverflow.com/questions/50006884/redux-understanding-advanced-mapstatetoprops-returning-a-function
// https://redux.js.org/recipes/computing-derived-data#selectorstodoselectorsjs
const getFashionCollection = (state, props) =>
  state.shopData.fashionCollections[props.match.params.categoryId];

export const fashionCollectionSelector2 = () =>
  createSelector(
    [getFashionCollection],
    (fashionCollection) => fashionCollection
  );
