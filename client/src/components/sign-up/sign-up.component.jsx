import React, { useState } from 'react';
import './sign-up.component.scss';
import { connect } from 'react-redux';
import CustomFormInput from '../custom-form-input/custom-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const propertyValue = event.target.value;

    setUserCredentials({ ...userCredentials, [propertyName]: propertyValue });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>Register new Account</h2>
      <span>Please fill in the data below</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <CustomFormInput
          type='text'
          name='displayName'
          value={displayName}
          inputLabel='Your Name'
          required
          handleChange={handleChange}
        ></CustomFormInput>
        <CustomFormInput
          type='email'
          name='email'
          value={email}
          inputLabel='Email'
          required
          handleChange={handleChange}
        ></CustomFormInput>
        <CustomFormInput
          type='password'
          name='password'
          value={password}
          inputLabel='Password'
          required
          handleChange={handleChange}
        ></CustomFormInput>
        <CustomFormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          inputLabel='Confirm Password'
          required
          handleChange={handleChange}
        ></CustomFormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
