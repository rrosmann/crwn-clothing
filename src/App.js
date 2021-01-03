import React from 'react';
import './App.css';
import './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import {
  setCurrentUser,
  setCurrentUserToNull,
} from './redux/user/user.actions';
import { currentUserSelector } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromFirebaseAuth = null;

  componentDidMount() {
    const { setCurrentUser, setCurrentUserToNull } = this.props;

    this.unsubscribeFromFirebaseAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        // user logged out
        if (!userAuth) {
          setCurrentUserToNull();
        } else {
          // user logged in
          const userReference = await createUserProfileDocument(userAuth);
          userReference.onSnapshot((userSnapshot) => {
            setCurrentUser({
              id: userSnapshot.id,
              ...userSnapshot.data(),
            });
          });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromFirebaseAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className='App'>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route
            exact
            path='/login'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUserSelector: currentUserSelector,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setCurrentUserToNull: () => dispatch(setCurrentUserToNull()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
