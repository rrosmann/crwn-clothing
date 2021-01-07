import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import FashionCollectionsOverview from '../../components/fashion-collections-overview/fashion-collections-overview.component';
import FashionCollectionPage from '../fashion-collection-page/fashion-collection-page.component';
import { mapFashionCollectionFromFirestoreForReduxState } from '../../firebase/firebase.utils';
import { updateFashionCollectionPreviewData } from '../../redux/shop-data/shop-data.actions';

class ShopPage extends React.Component {
  unSubscribeFromFirebase = null;

  componentDidMount() {
    const { updateFashionCollectionPreviewData } = this.props;
    mapFashionCollectionFromFirestoreForReduxState().then(
      (mappedObjectForReduxState) =>
        updateFashionCollectionPreviewData(mappedObjectForReduxState)
    );
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFashionCollectionPreviewData: (dataObjectForStateUpdate) =>
    dispatch(updateFashionCollectionPreviewData(dataObjectForStateUpdate)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
