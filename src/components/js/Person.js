import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I am {props.personName} and I am {props.personAge} years old</p>
      <input type='text' value={props.personName}/>
    </div>
  )
};

export default person;
