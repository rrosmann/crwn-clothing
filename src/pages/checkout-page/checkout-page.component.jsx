import React from 'react';
import './checkout-page.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartItemsSelector,
  totalPriceOfItemsInCartSelector,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-components/checkout-item/checkout-item.component';

const CheckoutPage = ({ itemsInCart, totalPriceOfItemsInCart }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>cart
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {itemsInCart.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}
    <div className='total'>
      <span>TOTAL: {totalPriceOfItemsInCart}$</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsInCart: cartItemsSelector,
  totalPriceOfItemsInCart: totalPriceOfItemsInCartSelector,
});

export default connect(mapStateToProps)(CheckoutPage);
