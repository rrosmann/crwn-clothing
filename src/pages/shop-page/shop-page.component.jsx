import React from 'react';
import { Route } from 'react-router-dom';
import FashionCollectionsOverview from '../../components/fashion-collections-overview/fashion-collections-overview.component';
import FashionCollectionPage from '../fashion-collection-page/fashion-collection-page.component';

const ShopPage = ({ match }) => {
  console.log('ShopPage:', match);
  return (
    <div>
      <h1>Shop Page</h1>
      <Route
        exact
        path={`${match.path}`}
        component={FashionCollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:categoryId`}
        component={FashionCollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
