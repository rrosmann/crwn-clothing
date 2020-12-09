import React from 'react';
import './sign-in.component.styles.scss';

import CustomFormInput from '../custom-form-input/custom-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(
        'Error occurred when logging in with email and password | ',
        error.message
      );
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your credentials</span>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            name='email'
            type='email'
            value={email}
            required
            inputLabel='Email'
            handleChange={this.handleChange}
          />
          <CustomFormInput
            name='password'
            type='password'
            value={password}
            required
            inputLabel='Password'
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              additionalClassName='google-sign-in'
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
