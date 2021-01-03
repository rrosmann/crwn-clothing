import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../../redux/cart/cart.actions';

// no need for a 'class-component', but I wanted to use it because of "learning reasons"
class CheckoutItem extends React.Component {
  render() {
    console.log('test');
    const {
      cartItem,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
    } = this.props;
    const { name, imageUrl, quantity, price } = cartItem;

    return (
      <div className='checkout-item'>
        <div className='item-image-container'>
          <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={() => addItemToCart(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className='price'>{price}</span>
        <div
          className='remove-button'
          onClick={() => clearItemFromCart(cartItem)}
        >
          &#10005;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
