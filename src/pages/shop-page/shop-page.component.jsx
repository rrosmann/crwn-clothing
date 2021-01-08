import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import FashionCollectionsOverview from '../../components/fashion-collections-overview/fashion-collections-overview.component';
import FashionCollectionPage from '../fashion-collection-page/fashion-collection-page.component';
import {
  firestore,
  mapFashionCollectionFromFirestoreForReduxState,
} from '../../firebase/firebase.utils';
import { updateFashionCollectionPreviewData } from '../../redux/shop-data/shop-data.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const FashionCollectionsOverviewWithSpinner = withSpinner(
  FashionCollectionsOverview
);
const FashionCollectionPageWithSpinner = withSpinner(FashionCollectionPage);
class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };

  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateFashionCollectionPreviewData } = this.props;
    const collectionRef = firestore.collection('fashionCollections');

    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
      async (querySnapshot) => {
        const mappedObjectForReduxState = await mapFashionCollectionFromFirestoreForReduxState(
          querySnapshot
        );
        updateFashionCollectionPreviewData(mappedObjectForReduxState);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <FashionCollectionsOverviewWithSpinner
              isLoading={isLoading}
              {...props}
            />
          )}
        ></Route>
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <FashionCollectionPageWithSpinner
              isLoading={isLoading}
              {...props}
            />
          )}
        ></Route>
      </div>
    );
  }

  componentWillUnmount() {
    this.unSubscribeFromSnapshot();
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFashionCollectionPreviewData: (dataObjectForStateUpdate) =>
    dispatch(updateFashionCollectionPreviewData(dataObjectForStateUpdate)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
