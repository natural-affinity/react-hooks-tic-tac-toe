import PropsTypes from 'prop-types';
import React from 'react';
import {Square} from './Square';

export const Board = (props) => {
  const renderSquare = (i) => {
    const onClick = () => {props.onClick(i);};

    return (
      <Square
        value={props.squares[i]}
        onClick={onClick}
      />
    );
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropsTypes.array.isRequired,
  onClick: PropsTypes.func.isRequired
};
