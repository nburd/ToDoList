import React from "react";
import TaskItem from "./TaskItem";
import TasksContext from "./TasksContext";
import TasksLogic from "./TasksLogic";

const TaskList = () => (
  <TasksContext.Consumer>
    {({ tasks }) => {
      const listItems = TasksLogic.sort(tasks).map((task) => (
        <TaskItem key={task.id} task={task} />
      ));

      return (
        <div>
          <div className="container header">
            <label className="cbx">IsDone</label>
            <label className="taskName">Task name</label>
            <label className="date">Due date</label>
          </div>
          {listItems}
        </div>
      );
    }}
  </TasksContext.Consumer>
);

export default TaskList;
