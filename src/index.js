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
  const winner = calculateWinner(squares);
  const status = (winner) ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const updateBoard = (i) => {
    const states = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

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

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
