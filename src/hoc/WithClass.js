import React from 'react';

const withClass = (props) => {
  return <div className={props.styleClass}>
    {props.children}
  </div>
};

export default withClass
