import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  render () {
    return this.props.persons.map( (p, index) => <Person
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
