import React, { PureComponent } from 'react';
import Styles from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {                                         //state can be used inside class where we extend react component and it cannot be used inside functions
      persons : [
        {id: 'asd1', name: 'Cheran', age: '30'},      //id is needed to act as a key while using map function
        {id: 'qwe1', name: 'Cholan', age: '28'},
        {id: 'zxc1', name: 'Pandiyan', age: '26'},
      ],
      showPersons: true,
      showPersonHandlerCount : 0
    }
    console.log('[Create App.js] Inside constructor()');
  }

  componentWillMount () {
    console.log('[Create App.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[Create App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log(' [Update App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons;
  //   // return false;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log(' [Update App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate () {
    console.log(' [Update App.js] Inside componentDidUpdate()', this.props, this.state);
  }

  // state = {                                         //state can be used inside class where we extend react component and it cannot be used inside functions
  //   persons : [
  //     {id: 'asd1', name: 'Cheran', age: '30'},      //id is needed to act as a key while using map function
  //     {id: 'qwe1', name: 'Cholan', age: '28'},
  //     {id: 'zxc1', name: 'Pandiyan', age: '26'},
  //   ],
  //   showPersons: true
  // }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();  //One way of populating the array with different array values instead of pointers
    const persons = [...this.state.persons];        //Recommended way of populating the array with the different array content using spread operators
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        showPersonHandlerCount: prevState.showPersonHandlerCount + 1
      }
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]};  //Inside State, get the specific object from the persons array pertaining to the personIndex
    person.name = event.target.value;                     //assign the event target value to the name object inside person[personIndex]

    const persons = [...this.state.persons]               //Get the persons array using spread operator
    persons[personIndex] = person                         //map the person constant value to persons array pertaining to the personIndex

    this.setState({
      persons : persons
    })
  }

  render() {
    console.log('[Create App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler} />
      )
    }

    return (
      <WithClass styleClass={Styles.App}>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.showPersonsHandler}
          />
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('header', {className: 'App-header'}, React.createElement('img', {src:logo, className: 'App-logo'}), React.createElement('h1', {className: 'App-title'}, 'Welcome to React')), React.createElement('p', {className: 'App-intro'}, 'To get started, edit', React.createElement('code', null, ' src/App.js'), ' and save to reload. - This is the Second method.'))
  }
}

export default App;
