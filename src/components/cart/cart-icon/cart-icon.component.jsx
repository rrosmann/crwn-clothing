import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagLogo } from '../../../asssets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../../redux/cart/cart-dropdown/cart-dropdown.actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon-group' onClick={toggleCartDropdown}>
      <ShoppingBagLogo className='cart-icon'></ShoppingBagLogo>
      <span className='cart-item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
