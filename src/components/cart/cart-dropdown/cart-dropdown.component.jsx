import React from 'react';
import './cart-dropdown.styles.scss';

import CustomButton from '../../custom-button/custom-button.component';
// import { connect } from 'react-redux';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-group'>
      <div className='cart-items'></div>
      <CustomButton type='button' additionalClassName='checkout-button'>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
