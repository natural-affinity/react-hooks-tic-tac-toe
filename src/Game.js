import './index.css';
import React, {useState} from 'react';
import {Board} from './Board';
import {calculateWinner} from './helpers';

export const Game = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = (winner) ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  const onClickSquare = (i) => { updateBoard(i); };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    const onClickJumpTo = () => { jumpTo(move); };

    return (
      <li key={step}>
        <button onClick={onClickJumpTo}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 === 0);
  };

  const updateBoard = (i) => {
    const h = history.slice(0, stepNumber + 1);
    const c = h[h.length - 1];
    const states = c.squares.slice();
    if (calculateWinner(states) || states[i]) {
      return;
    }

    states[i] = xIsNext ? 'X' : 'O';
    setHistory(h.concat([{squares: states}]));
    setStepNumber(h.length);
    setxIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={onClickSquare}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
