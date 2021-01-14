import React from 'react';
import './fashion-collection-page.styles.scss';
import { connect } from 'react-redux';
import { fashionCollectionSelector } from '../../redux/shop-data/shop-data.selectors';
import FashionCollectionItem from '../../components/fashion-collection-item/fashion-collection-item.component';

const FashionCollectionPage = ({ fashionCollection }) => {
  return (
    <div className='fashion-collection-page'>
      <h2 className='title'>{fashionCollection.title}</h2>
      <div className='fashion-collection-items'>
        {fashionCollection.items.map((fashionCollectionItem) => (
          <FashionCollectionItem
            key={fashionCollectionItem.id}
            item={fashionCollectionItem}
          ></FashionCollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  fashionCollection: fashionCollectionSelector(
    ownProps.match.params.categoryId
  )(state),
});

// const mapStateToProps2 = () => {
//   const makeFashionSelector2 = fashionCollectionSelector2();

//   return (state, ownProps) => ({
//     fashionCollection: makeFashionSelector2(state, ownProps),
//   });
// };

export default connect(mapStateToProps)(FashionCollectionPage);
