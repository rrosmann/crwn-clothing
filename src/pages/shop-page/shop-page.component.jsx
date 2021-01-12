import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import FashionCollectionsOverviewContainer from '../../components/fashion-collections-overview/fashion-collection-container.component';
import FashionCollectionPageContainer from '../fashion-collection-page/fashion-collection-page-container.component';
import { fetchFashionCollectionStart } from '../../redux/shop-data/shop-data.actions';
import { isFetchingDataSelector } from '../../redux/shop-data/shop-data.selectors';

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchFashionCollectionStart } = this.props;
    fetchFashionCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Shop Page</h1>
        <Route
          exact
          path={`${match.path}`}
          component={FashionCollectionsOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:categoryId`}
          component={FashionCollectionPageContainer}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetchingData: isFetchingDataSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFashionCollectionStart: () => dispatch(fetchFashionCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
