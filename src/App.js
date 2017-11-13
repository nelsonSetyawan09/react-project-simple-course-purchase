import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSale from './CourseSale';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      courses: [
        { name: 'Complete Javascript ES6 course', price: 99},
        { name: 'Complete React-v16 course', price: 115 },
        { name: 'Complete NodeJS and Express course', price: 200 },
        { name: 'Complete MongoDB for ES6 course', price: 75 },
        { name: 'Complete Mysql course v2', price: 199 },

      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CourseSale courses={this.state.courses} totals={this.state.totals}/>
      </div>
    );
  }
}

export default App;
