import React from 'react';
import Styles from './Person.css';

const person = (props) => {
  return (
    <div className={Styles.Person}>
      <p onClick={props.click}>I am {props.personName} and I am {props.personAge} years old</p>
      <input type='text' onChange={props.changeName} value={props.personName}/>
    </div>
  )
};

export default person;
