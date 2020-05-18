import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "./contexts/TasksContext";
import TasksLogic from "./TasksLogic";
import strings from "./strings";
import Localize from "./Localize";

const TaskList = () => {
  const localeStrings = Localize(strings);
  const { tasks } = useContext(TasksContext);

  
  const listItems = TasksLogic.sort(tasks).map((task) => (
    <TaskItem key={task.id} task={task} />
  ));
  return (
    <div>
      <div className="container header">
        <label className="cbx">{localeStrings.isDone}</label>
        <label className="taskName">{localeStrings.name}</label>
        <label className="date">{localeStrings.dueDate}</label>
      </div>
      {listItems}
    </div>
  );
};

export default TaskList;
