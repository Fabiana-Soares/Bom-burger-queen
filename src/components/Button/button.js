import React from 'react';

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick} component={props.component}>
      {props.title}
    </button>
  );
}

export default Button; 