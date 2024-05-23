import React from 'react';
import './styles.css';

const ConnectFourCell = ({ value, rowIndex, columnIndex, handleClick }) => {
  return (
    <div
      className={`cf-cell ${value ? `cf-cell-${value}` : ''}`}
      onClick={() => handleClick(columnIndex)}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
    ></div>
  );
};

export default ConnectFourCell;
