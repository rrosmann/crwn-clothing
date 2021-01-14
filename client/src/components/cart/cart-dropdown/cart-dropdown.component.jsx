import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { cartItemsSelector } from '../../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../../redux/cart/cart-dropdown/cart-dropdown.actions';

const CartDropdown = ({ itemsInCart, history, dispatch }) => {
  return (
    <div className='cart-dropdown-group'>
      <div className='cart-items'>
        {itemsInCart.length ? (
          itemsInCart.map((itemInCart) => (
            <CartItem key={itemInCart.id} item={itemInCart}></CartItem>
          ))
        ) : (
          <span className='cart-empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        type='button'
        additionalClassName='checkout-button'
        onClick={() => {
          history.push('/checkout');
          // notice that dispatch is available, although we haven't implemented a 'mapDispatchToProps'
          // toggleCartDropdown();
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsInCart: cartItemsSelector(state),
});

// not needed, because 'dispatch' is available even without 'mapDispatchToProps'
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropdown: () => dispatch(toggleCartDropdown()),
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
