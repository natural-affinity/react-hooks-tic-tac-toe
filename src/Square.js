import PropsTypes from 'prop-types';
import React from 'react';

export const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropsTypes.string,
  onClick: PropsTypes.func.isRequired
};
