import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  constructor (props) {
    super(props);
    this.state = {                                         //state can be used inside class where we extend react component and it cannot be used inside functions
      persons : [
        {id: 'asd1', name: 'Cheran', age: '30'},      //id is needed to act as a key while using map function
        {id: 'qwe1', name: 'Cholan', age: '28'},
        {id: 'zxc1', name: 'Pandiyan', age: '26'},
      ],
      showPersons: true
    }
    console.log('[Create Persons.js] Inside constructor()');
  }

  componentWillMount () {
    console.log('[Create Persons.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[Create Persons.js] Inside componentDidMount()');
  }

  componentWillUnmount () {
    console.log('[Create Persons.js] Inside componentWillUnmount()');
  }

  componentWillReceiveProps (nextProps) {
    console.log(' [Update Persons.js] Inside componentWillReceiveProps()', nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(' [Update Persons.js] Inside shouldComponentUpdate()', nextProps, this.props);
    return nextProps.persons !== this.props.persons ;
    // return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(' [Update Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate () {
    console.log(' [Update Persons.js] Inside componentDidUpdate()', this.props, this.state);
  }

  render () {
    console.log('[Create Persons.js] Inside render()');
    return this.props.persons.map( (p, index) => <Person
        pos={index}
        personName={p.name}
        personAge={p.age}
        key={p.id}
        click={() => this.props.clicked (index)}
        changeName={(event) => this.props.changed (event, p.id)}
        ></Person>
    );
  }
}

// const persons = (props) => props.persons.map( (p, index) => {
//   return <Person
//     personName={p.name}
//     personAge={p.age}
//     key={p.id}
//     click={() => props.clicked (index)}
//     changeName={(event) => props.changed (event, p.id)}
//     ></Person>
// });
// export default persons

export default Persons
