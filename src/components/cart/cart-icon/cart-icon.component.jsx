import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingBagLogo } from '../../../asssets/shopping-bag.svg';
import { toggleCartDropdown } from '../../../redux/cart/cart-dropdown/cart-dropdown.actions';
import { numberOfItemsInCartSelector } from '../../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, numberOfItemsInCart }) => {
  return (
    <div className='cart-icon-group' onClick={toggleCartDropdown}>
      <ShoppingBagLogo className='cart-icon'></ShoppingBagLogo>
      <span className='cart-item-count'>{numberOfItemsInCart}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  numberOfItemsInCart: numberOfItemsInCartSelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
