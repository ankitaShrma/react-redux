import React from "react";
import PropTypes from "prop-types";

const XOUI = ({
  board = [],
  player,
  totalMoves,
  winner,
  gameEnd,
  addXOItem = f => f,
  checkIfGameEnded = f => f,
  resetGame = f => f
}) => {
  checkIfGameEnded(board, totalMoves);
  return (
    <ul>
      <div
        className="board"
        onClick={event => {
          if (winner === "" && board[event.target.dataset.square] === "") {
            addXOItem(event.target.dataset.square);

            //event.target.innerText = player;
          }
        }}
      >
        {board.map((value, index) => (
          <div className="square" data-square={index}>
            {value}
          </div>
        ))}

        <div>Winner is: {winner}</div>
        <button onClick={event => resetGame()}>Reset</button>
      </div>
    </ul>
  );
};

export default XOUI;
