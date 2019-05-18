import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./services/reducers";
import store from "./services/store";

const Root = ({ children, initialState = {} }) => {
  return <Provider store={createStore(reducers)}>{children}</Provider>;
};

export default Root;
