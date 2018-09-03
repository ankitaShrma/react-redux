import { connect } from "react-redux";
// import MIXPANEL from "mixpanel-user-library";

// import MIXPANEL from "../data/lft-mixpanel-user-library";

import {
  addXO,
  checkGameOver,
  checkResetGame
} from "../actions/ticTacToeActions";
import XOUI from "./XOUI";

var MIXPANEL = require("mixpanel-user-library").default;

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player,
    totalMoves: state.totalMoves,
    winner: state.winner,
    gameEnd: state.gameEnd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addXOItem: index => {
      dispatch(addXO(index));
    },

    checkIfGameEnded: (board, totalMoves) => {
      dispatch(checkGameOver(board, totalMoves));
    },
    resetGame: () => {
      MIXPANEL.configure({
        apiKey: "abc123",
        email: "shrijan00003@gmail.com"
      })
        .then(data => console.log(data))
        .catch(err => console.log(err));

      dispatch(checkResetGame());
    }
  };
};

const EnhancedXOUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(XOUI);

export default EnhancedXOUI;
