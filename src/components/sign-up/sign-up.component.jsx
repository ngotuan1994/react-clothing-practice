import React from 'react';
import "./sign-up.styles.scss"
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserPorfileDocument } from "../../firebase/firebase.utils";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('password is not match with confirm password');
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserPorfileDocument(user, { displayName });
    } catch (error) {
      console.log("Submit error", error.message);
    }
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState( {[name] : value})
  }
  render() {
    const {displayName, email,password, confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2 className='sign-up__title'>I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form className='sign-up__form' onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required></FormInput>
          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required></FormInput>
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required></FormInput>
          <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required></FormInput>
          <CustomButton type="submit" >Sign up</CustomButton>
        </form>
      </div>
    )
  }

}

export default Signup;
