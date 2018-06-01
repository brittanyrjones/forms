import React, { Component } from 'react';
import  './SignupForm.css';
import PropTypes from 'prop-types';

class SignupForm extends Component {



  constructor() {
      super();

      this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  }

  static propTypes = {
    addUser: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
  }


  onSubmit = (event) => {
  

  this.props.addUser({
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.email,
    password: this.state.password
  });

  this.setState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
}



render() {

    return (
      <div>
        <form
        onSubmit={this.onSubmit}

        className="signup-form">
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input
            name="firstname"
            onChange={(event) => {this.onFieldChange('firstname', event.target.value)}}
            value={this.state.firstname}
             />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
            name="lastname"
            onChange={(event) => {this.onFieldChange('lastname', event.target.value)}}
            value={this.state.lastname}
             />
          </div>
          <div>

            <label htmlFor="email">Email:</label>
            <input name="email"
            onChange={(event) => {this.onFieldChange('email', event.target.value)}}
            value={this.state.email}

            />
          </div>
          <div>

            <label htmlFor="password">Password:</label>
            <input name="password"
            onChange={(event) => {this.onFieldChange('password', event.target.value)}}
            value={this.state.password}

            />
          </div>
          <input
            className="button success"
            type="submit"
            value="Create Account"
          />
        </form>
      </div>
    );
  }
}
















export default SignupForm;
