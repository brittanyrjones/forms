import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/SignupForm';

class App extends Component {

  render() {

      return (
        <div>
        <header>
           <h1> Sign Up! </h1>
           </header>
         <SignupForm />
         </div>

      );
    }
}


export default App;
