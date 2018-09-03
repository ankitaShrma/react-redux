import { createStore } from "redux";

import XOReducer from "./reducers/ticTacToeReducer";

const store = createStore(
  XOReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
