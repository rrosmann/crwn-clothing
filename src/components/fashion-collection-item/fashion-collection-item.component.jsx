import React from 'react';
import './fashion-collection-item.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

const FashionCollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='fashion-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='fashion-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        additionalClassName='checkout-button'
        onClick={() => addItemToCart(item)}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(FashionCollectionItem);
