import React, { useState } from 'react';
import './sign-in.component.styles.scss';
import { connect } from 'react-redux';
import CustomFormInput from '../custom-form-input/custom-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // Lecture 211 | https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15245344#overview
  // const [ userCredentials, setUserCredentials] = useState({email: '', password: ''});
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserCredentials({...userCredentials, [name]: value});
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your credentials</span>
      <form onSubmit={handleSubmit}>
        <CustomFormInput
          name='email'
          type='email'
          value={email}
          required
          inputLabel='Email'
          handleChange={(e) => setEmail(e.target.value)}
        />
        <CustomFormInput
          name='password'
          type='password'
          value={password}
          required
          inputLabel='Password'
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className='buttons'>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            additionalClassName='google-sign-in'
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
