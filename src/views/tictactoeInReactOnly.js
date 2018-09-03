import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { compose } from "redux";

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      turn: "x",
      gameEnded: false,
      board: Array(9).fill(""),
      totalMoves: 0,
      winner: undefined
    };
  }

  clicked(event) {
    if (this.state.board[event.target.dataset.square] === "") {
      this.state.board[event.target.dataset.square] = this.state.turn;

      console.log(event.target.dataset.square, "oooooooooo");
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === "x" ? "o" : "x",
        board: this.state.board,
        totalMoves: this.state.totalMoves++
      });
      var result = this.checkWinner();
      console.log(result);
      if (result === "x") {
        this.setState({
          gameEnded: true,
          winner: "x"
        });
      } else if (result === "o") {
        this.setState({
          gameEnded: true,
          winner: "o"
        });
      } else if (result === "draw") {
        this.setState({
          gameEnded: true,
          winner: "draw"
        });
      }
      console.log("winner", this.state.winner);
    }
  }

  checkWinner() {
    var moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    let board = this.state.board;
    console.log("board", board);

    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      ) {
        return board[moves[i][0]];
      }
      if (this.state.totalMoves === 9) {
        return "draw";
      }
    }
  }

  render() {
    return (
      <div className="board" onClick={e => this.clicked(e)}>
        <div className="square" data-square="0" />
        <div className="square" data-square="1" />
        <div className="square" data-square="2" />
        <div className="square" data-square="3" />
        <div className="square" data-square="4" />
        <div className="square" data-square="5" />
        <div className="square" data-square="6" />
        <div className="square" data-square="7" />
        <div className="square" data-square="8" />
      </div>
    );
  }
}
export default TicTacToe;
