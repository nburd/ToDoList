import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TasksContext from "./contexts/TasksContext";
import TasksLogic from "./TasksLogic";
import LocalizationContext from "./contexts/LocalizationContext";
import strings from "./strings";

const TaskList = () => {
  const locale = useContext(LocalizationContext);
  const localeStings = strings[locale];
  return (
    <TasksContext.Consumer>
      {({ tasks }) => {
        const listItems = TasksLogic.sort(tasks).map((task) => (
          <TaskItem key={task.id} task={task} />
        ));

        return (
          <div>
            <div className="container header">
              <label className="cbx">{localeStings.isDone}</label>
              <label className="taskName">{localeStings.name}</label>
              <label className="date">{localeStings.dueDate}</label>
            </div>
            {listItems}
          </div>
        );
      }}
    </TasksContext.Consumer>
  );
};

export default TaskList;
