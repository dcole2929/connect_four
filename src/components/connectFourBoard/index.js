import React from 'react';
import ConnectFourCell from '../connectFourCell';
import './styles.css';

const ConnectFourBoard = ({ board, handleClick }) => {
  return (
    <div className="cf-board">
      {board.map((row, rowIndex) => {
        return row.map((cell, columnIndex) => (
          <ConnectFourCell
            key={columnIndex}
            value={cell}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            handleClick={handleClick}
          />
        ));
      }
      )}
    </div>
  );
};

export default ConnectFourBoard;
