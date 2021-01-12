import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../asssets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { currentUserSelector } from '../../redux/user/user.selectors';
import { showCartDropdownSelector } from '../../redux/cart/cart-dropdown/cart-dropdown.selectors';
import { signOutStart } from '.././../redux/user/user.actions';

const Header = ({ currentUser, showCartDropdown, signOutStart }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={signOutStart}>
            LOG OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            LOGIN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {showCartDropdown ? <CartDropdown></CartDropdown> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  showCartDropdown: showCartDropdownSelector,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
