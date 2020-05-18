import React, { useState, useContext } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TasksContext from "./contexts/TasksContext";
import TasksLogic from "./TasksLogic";
import LocalizationContext from "./contexts/LocalizationContext";
import strings from "./strings";

const TaskListController = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks")) || []
  );
  const [validation, setValidation] = useState();

  const locale = useContext(LocalizationContext);
  const localeStings = strings[locale];

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
            setValidation(localeStings.validationError);
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
