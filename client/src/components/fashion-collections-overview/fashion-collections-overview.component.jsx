import React from 'react';
import './fashion-collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fashionCollectionsPreviewSelector } from '../../redux/shop-data/shop-data.selectors';
import FashionCollectionPreview from '../fashion-collection-preview/fashion-collection-preview.component';

const FashionCollectionsOverview = ({ fashionCollectionsPreviewArray }) => (
  <div className='fashion-collections-overview'>
    {fashionCollectionsPreviewArray.map(
      ({ id, ...otherFashionCollectionProps }) => (
        <FashionCollectionPreview
          key={id}
          {...otherFashionCollectionProps}
        ></FashionCollectionPreview>
      )
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  fashionCollectionsPreviewArray: fashionCollectionsPreviewSelector,
});

export default connect(mapStateToProps)(FashionCollectionsOverview);
