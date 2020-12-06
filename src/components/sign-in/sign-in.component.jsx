import React from 'react';
import './sign-in.component.styles.scss';

import CustomFormInput from '../custom-form-input/custom-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
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
