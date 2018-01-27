import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload - This is the first method.
        </p>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, React.createElement('img', {src:logo, className: 'App-logo'}), React.createElement('h1', {className: 'App-title'}, 'Welcome to React')), React.createElement('p', {className: 'App-intro'}, 'To get started, edit', React.createElement('code', null, ' src/App.js'), ' and save to reload. - This is the Second method.'))
  }
}

export default App;
