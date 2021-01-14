import FashionCollectionPage from './fashion-collection-page.component';
import { connect } from 'react-redux';
import { areFashionCollectionsLoaded } from '../../redux/shop-data/shop-data.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = (state) => ({
  isLoading: !areFashionCollectionsLoaded(state),
});

const FashionCollectionPageContainer = () => {
  const addedWithSpinnerToComponent = withSpinner(FashionCollectionPage);
  const addedConnectToComponent = connect(mapStateToProps)(
    addedWithSpinnerToComponent
  );
  return addedConnectToComponent;
};

export default FashionCollectionPageContainer();
