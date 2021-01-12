import React from 'react';
import './sign-up.component.scss';
import { connect } from 'react-redux';
import CustomFormInput from '../custom-form-input/custom-form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const propertyName = event.target.name;
    const propertyValue = event.target.value;

    this.setState({ [propertyName]: propertyValue });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Register new Account</h2>
        <span>Please fill in the data below</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <CustomFormInput
            type='text'
            name='displayName'
            value={displayName}
            inputLabel='Your Name'
            required
            handleChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            type='email'
            name='email'
            value={email}
            inputLabel='Email'
            required
            handleChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            type='password'
            name='password'
            value={password}
            inputLabel='Password'
            required
            handleChange={this.handleChange}
          ></CustomFormInput>
          <CustomFormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            inputLabel='Confirm Password'
            required
            handleChange={this.handleChange}
          ></CustomFormInput>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
