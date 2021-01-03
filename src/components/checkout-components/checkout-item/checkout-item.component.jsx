import React from 'react';
import './checkout-item.styles.scss';

class CheckoutItem extends React.Component {
  render() {
    const {
      cartItem: { name, imageUrl, quantity, price },
    } = this.props;

    return (
      <div className='checkout-item'>
        <div className='item-image-container'>
          <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
      </div>
    );
  }
}

export default CheckoutItem;
