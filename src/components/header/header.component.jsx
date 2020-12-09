import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../asssets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart/cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, showCartDropdown }) => {
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
          <div className='option' onClick={() => auth.signOut()}>
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

const mapStateToProps = ({
  user: { currentUser },
  cartDropdown: { showCartDropdown },
}) => ({
  currentUser: currentUser,
  showCartDropdown: showCartDropdown,
});

export default connect(mapStateToProps)(Header);
