import React from "react";
import "./styles.css";
import ConnectFourBoard from "../connectFourBoard";
import { checkWinner, generateNewBoard } from '../../utils';
import { useState } from "react";

export default function ConnectFour() {
  const [board, setBoard] = useState(() => generateNewBoard());
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState("");

  const handleClick = (columnIndex) => {
    if (winner) return; // No more moves if we have a winner
    let newBoard = [...board];
    for (let row = newBoard.length - 1; row >= 0; --row) {
      if (board[row][columnIndex] === "") {
        newBoard[row][columnIndex] = currentPlayer;
        break;
      }
    }
    const newPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    const newWinner = checkWinner(newBoard);
    setBoard(newBoard);
    setCurrentPlayer(newPlayer);
    setWinner(newWinner);
  }

  const newGame = () => {
    // reset board
    setBoard(generateNewBoard());
    // reset player
    setCurrentPlayer('red')
    // reset winner
    setWinner('');
  }

  return (
    <div className="cf-container">
      <button onClick={() => newGame()}>
        New Game
      </button>
      <ConnectFourBoard board={board} handleClick={handleClick} />
      {winner ? (
        <div className="current-player-container">
          <h1>The Winner is</h1>
          <div className={`cf-chip-${winner}`}></div>
        </div>
      ) : (
        <div className="current-player-container">
          <h1>Player turn:</h1>
          <span className={`cf-chip-${currentPlayer}`} />
        </div>
      )}
    </div>
  );

}
