import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskListController from "./TaskListController";
import LocalizationContext from "./LocalizationContext";

ReactDOM.render(
  <LocalizationContext.Provider value="ru">
    <TaskListController />
  </LocalizationContext.Provider>,
  document.getElementById("root")
);
