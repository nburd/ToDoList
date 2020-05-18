import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TasksContext from "./contexts/TasksContext";
import TasksLogic from "./TasksLogic";
import strings from "./strings";
import Localize from "./Localize";

const TaskListController = () => {
  const localeStrings = Localize(strings);
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks")) || []
  );
  const [validation, setValidation] = useState();

  
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <TasksContext.Provider
      value={{
        tasks: tasks,
        validation: validation,
        handleAdd: (task) => {
          if (task.name && task.date) {
            setTasks(TasksLogic.addToTop(tasks, task));
            setValidation(null);
          } else {
            setValidation(localeStrings.validationError);
          }
        },
        handleChange: (task) => {
          console.log("handleChange", task);
          setTasks(TasksLogic.changeTask(tasks, task));
        },
      }}>
      <div>
        <AddTaskForm />
        <TaskList />
      </div>
    </TasksContext.Provider>
  );
};

export default TaskListController;
