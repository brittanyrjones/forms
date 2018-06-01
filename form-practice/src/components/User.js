import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email,
      password: props.password,
    };
  }



  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   isPresent: PropTypes.bool,
  // }

  // isTopStudent() {
  //   return this.props.name === 'Hermine Granger';
  // }


  render() {
    // const studentStyle = {
    //   color: 'purple',
    //   fontSize: '20pt',
    // };

    return (
      <article

        <h3>
          {this.state.name}
        </h3>
        <label> Change Student name: </label>
        <input onChange={ this.onNameChange }
          type="text"
          name="name"
        />
        <h4>
          {this.state.onStudentPresentChange ? "In class": "Absent"}
        </h4>
        <p>Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
        <button
          onClick={ this.onToggleButton }>
          Toggle Present
        </button>

      </article>
    );
  }

}

User.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};







export default Student;
