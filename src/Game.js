import './index.css';
import React, {useState} from 'react';
import {Board} from './Board';

export  const Game = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = (winner) ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const updateBoard = (i) => {
    const h = history;
    const c = h[h.length - 1];
    const states = c.squares.slice();
    if (calculateWinner(states) || states[i]) {
      return;
    }

    states[i] = xIsNext ? 'X' : 'O';
    setHistory(h.concat([{squares: states}]));
    setxIsNext(!xIsNext);
  };
  const onClick = (i) => { updateBoard(i); };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={onClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
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
