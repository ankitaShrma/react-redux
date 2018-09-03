import { ADD_XO, GAME_OVER, RESET_GAME } from "../actions/ticTacToeActions";

const INITIAL_STATE = {
  board: Array(9).fill(""),
  player: "x",
  gameEnd: false,
  winner: "",
  totalMoves: 0
};

function setBoardItem(arr, index, player) {
  return arr.map((value, i) => {
    if (i == index) {
      // Can't use === operator because type is not same:
      // i is number and index is string

      return player;
    }

    return value;
  });
}

function gameOverLogic(board, totalMoves, gameEnd) {
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

  for (let i = 0; i < moves.length; i++) {
    const [a, b, c] = moves[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
    if (totalMoves === 9) {
      return "draw";
    }
  }

  return "";
}

const XOReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_XO:
      if (state.winner) return state;
      else {
        return {
          ...state,
          board: setBoardItem(state.board, action.payload.index, state.player),

          player: state.player === "x" ? "o" : "x",
          totalMoves: state.totalMoves + 1
        };
      }
    case GAME_OVER:
      return {
        ...state,
        winner: gameOverLogic(
          action.payload.board,
          action.payload.totalMoves,
          state.gameEnd
        )
      };

    case RESET_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default XOReducer;
