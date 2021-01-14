import FashionCollectionsOverview from './fashion-collections-overview.component';
import { connect } from 'react-redux';
import { areFashionCollectionsLoaded } from '../../redux/shop-data/shop-data.selectors';
import withSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = (state) => ({
  isLoading: !areFashionCollectionsLoaded(state),
});

const FashionCollectionsOverviewContainer = () => {
  const addedWithSpinnerToComponent = withSpinner(FashionCollectionsOverview);
  const addedConnectToComponent = connect(mapStateToProps)(
    addedWithSpinnerToComponent
  );
  return addedConnectToComponent;
};

export default FashionCollectionsOverviewContainer();
