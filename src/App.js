import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './adss.less'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>{this.state.date.toLocaleDateString() + "-" + this.state.date.toLocaleTimeString()}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
