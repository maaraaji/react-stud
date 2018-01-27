import React from 'react';

import Styles from './Cockpit.css';

const cockpit = (props) => {
  const classes = []
  let buttonClass = ''

  if (props.showPersons){
    buttonClass = Styles.showPersons
  }

  if (props.persons.length <=2) {
    classes.push(Styles.colorBrown);
  }
  if (props.persons.length <=1) {
    classes.push(Styles.fontBold);
  }

  return (
    <div className={Styles.Cockpit}>
      <h1>
        ReactJS Study Guide - The descriptions are enclosed in source codes
      </h1>
      <p className={classes.join(' ')}>Checking Dynamic Classes</p>
      <button className={buttonClass} onClick={props.clicked}>TOGGLE NAME CARD</button>
    </div>
  );
};

export default cockpit
