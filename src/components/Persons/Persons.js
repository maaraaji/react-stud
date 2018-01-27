import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map( (p, index) => {
  return <Person
    personName={p.name}
    personAge={p.age}
    key={p.id}
    click={() => props.clicked (index)}
    changeName={(event) => props.changed (event, p.id)}
    ></Person>
});


export default persons
