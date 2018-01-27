import React from 'react';

import Styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const classes = []
  let buttonClass = Styles.Button

  if (props.showPersons){
    buttonClass = [Styles.Button, Styles.showPersons].join(' ')
  }

  if (props.persons.length <=2) {
    classes.push(Styles.colorBrown);
  }
  if (props.persons.length <=1) {
    classes.push(Styles.fontBold);
  }

  return (
    // <div className={Styles.Cockpit}>     //Instead of using Div (Wrapping enclosing tag) use Aux HOC if you are using React 16
      <Aux>                                 //If you are using React 16.2 no need to use Aux by defining Aus HOC component instead React does the job so simple enclose with <></>
        <h1>
          ReactJS Study Guide - The descriptions are enclosed in source codes
          </h1>
          <p className={classes.join(' ')}>Checking Dynamic Classes</p>
          <button className={buttonClass} onClick={props.clicked}>TOGGLE NAME CARD</button>
      </Aux>
    // </div>
  );
};

export default cockpit
