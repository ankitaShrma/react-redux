export const ADD_XO = "ADD_XO";
export const GAME_OVER = "GAME_OVER";
export const RESET_GAME = "RESET_GAME";

export const addXO = (index, board, totalMoves) => ({
  type: ADD_XO,
  payload: {
    index
  }
});

export const checkGameOver = (board, totalMoves) => ({
  type: GAME_OVER,
  payload: {
    board,
    totalMoves
  }
});

export const checkResetGame = () => ({
  type: RESET_GAME
});
