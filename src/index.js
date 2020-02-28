import './index.css';
import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Square = (props) => {
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

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  const updateBoard = (i) => {
    const states = squares.slice();
    states[i] = xIsNext ? 'X' : 'O';
    setSquares(states);
    setxIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    const onClick = () => { updateBoard(i); };

    return (
      <Square
        value={squares[i]}
        onClick={onClick}
      />
    );
  };

  return (
    <div>
      <div className="status">{status}</div>
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

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
