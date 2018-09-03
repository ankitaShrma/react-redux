import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import "./App.css";
import XOUI from "./views/XO";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <XOUI />
        </div>
      </Provider>
    );
  }
}

export default App;
