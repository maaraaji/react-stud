import React, { Component } from 'react';
import Styles from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

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
    console.log('[Create Per.js] Inside constructor()');
  }

  componentWillMount () {
    console.log('[Create Per.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[Create Per.js] Inside componentDidMount()');
  }

  componentWillUnmount () {
    console.log('[Create Per.js] Inside componentWillUnmount()');
  }

  render () {
    console.log('[Create Per.js] Inside render()');
    return <WithClass styleClass={Styles.Person}>
      <p onClick={this.props.click}>I am {this.props.personName} and I am {this.props.personAge} years old</p>
      <input type='text' onChange={this.props.changeName} value={this.props.personName}/>
    </WithClass>
  }
}

// const person = (props) => {
//   return (
//     <div className={Styles.Person}>
//       <p onClick={props.click}>I am {props.personName} and I am {props.personAge} years old</p>
//       <input type='text' onChange={props.changeName} value={props.personName}/>
//     </div>
//   )
// };
// export default person;

export default Person
