import React from 'react';
import './App.css';
import './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import { checkUserSession } from './redux/user/user.actions';
import { currentUserSelector } from './redux/user/user.selectors';

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  renderRedirect = (currentUser) => {
    return () => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />);
  };

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
            render={this.renderRedirect(currentUser)}
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
