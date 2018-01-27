import React, { Component } from 'react';
import './App.css';

import Person from './components/js/Person';

class App extends Component {

  state = {                                         //state can be used inside class where we extend react component and it cannot be used inside functions
    persons : [
      {id: 'asd1', name: 'Cheran', age: '30'},      //id is needed to act as a key while using map function
      {id: 'qwe1', name: 'Cholan', age: '28'},
      {id: 'zxc1', name: 'Pandiyan', age: '26'},
    ],
    showPersons: true
  }

  deletePersonHandler = (index) => {

  }

  showPersonsHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              personName={person.name}
              personAge={person.age}
              key={person.id}
              />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>
          ReactJS Study Guide - The descriptions are enclosed in source codes
        </h1>
        <p>Checking Dynamic Classes</p>
        <button onClick={this.showPersonsHandler}>SHOW NAME CARD</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, React.createElement('img', {src:logo, className: 'App-logo'}), React.createElement('h1', {className: 'App-title'}, 'Welcome to React')), React.createElement('p', {className: 'App-intro'}, 'To get started, edit', React.createElement('code', null, ' src/App.js'), ' and save to reload. - This is the Second method.'))
  }
}

export default App;
