import React from 'react';
import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ itemsInCart }) => {
  return (
    <div className='cart-dropdown-group'>
      <div className='cart-items'>
        {itemsInCart.map((itemInCart) => (
          <CartItem key={itemInCart.id} item={itemInCart}></CartItem>
        ))}
      </div>
      <CustomButton type='button' additionalClassName='checkout-button'>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { itemsInCart } }) => ({
  itemsInCart: itemsInCart,
});

export default connect(mapStateToProps)(CartDropdown);
