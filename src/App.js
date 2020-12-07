import React from 'react';
import './App.css';
import './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromFirebaseAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromFirebaseAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        // user logged out
        if (!userAuth) {
          this.setState({ currentUser: null });
        } else {
          // user logged in
          const userReference = await createUserProfileDocument(userAuth);
          userReference.onSnapshot((userSnapshot) => {
            this.setState({
              currentUser: {
                id: userSnapshot.id,
                ...userSnapshot.data(),
              },
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
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/login' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
