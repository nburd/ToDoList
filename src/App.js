import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import LocalizationContext from "./contexts/LocalizationContext";
import { Provider } from "mobx-react";
import taskStore from "./stores/TasksStore";

const stores = { taskStore };

const App = () => {
  return (
    <LocalizationContext.Provider value="ru">
      <Provider {...stores}>
        <div>
          <AddTaskForm />
          <TaskList />
        </div>
      </Provider>
    </LocalizationContext.Provider>
  );
};

export default App;
