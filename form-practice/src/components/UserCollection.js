import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';
import SignupForm from './SignupForm.js'


class UserCollection extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          firstname: "Katherine Ada",
          lastname: "Jones",
        email: "katherine-ada@ada.co",
        password: "none",

      }
    ]

  };
}


  addUser = (user) => {
    const users = this.state.users;
    users.push(user);

    this.setState({
      users,
    });
  }

  render() {
    console.log(this.state.users);

    const userComponents = this.state.users.map((user, index) => {
      return (
        <li key={user.email}>
        <User
        userData={user}
        firstname={user.firstname}
        lastname={user.lastname}
        email={user.email}
        password={user.password}
        index = { index }
        />
        </li>
      );
    });

    return(
      <section>
      <h2>User Collection</h2>

      <SignupForm
      addUser={this.addUser}
      />
      <ul>
      {userComponents}
      </ul>
      </section>

    );
  }
}
export default UserCollection;
