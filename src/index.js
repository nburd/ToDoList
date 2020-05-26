import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LocalizationContext from "./contexts/LocalizationContext";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasksReducer from "./reducers/tasksReducer";

const store = createStore(tasksReducer);

ReactDOM.render(
  <LocalizationContext.Provider value="ru">
    <Provider store={store}>
      <App />
    </Provider>
  </LocalizationContext.Provider>,
  document.getElementById("root")
);
