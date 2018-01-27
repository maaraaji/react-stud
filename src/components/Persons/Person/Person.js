import React, { Component } from 'react';
import Styles from './Person.css';

class Person extends Component {
  render () {
    return <div
      className={Styles.Person}>
      <p onClick={this.props.click}>I am {this.props.personName} and I am {this.props.personAge} years old</p>
      <input type='text' onChange={this.props.changeName} value={this.props.personName}/>
    </div>
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
