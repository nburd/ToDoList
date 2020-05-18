import React, { useContext } from "react";
import TasksContext from "./TasksContext";

const TaskItem = ({ task }) => {
  const today = new Date();
  var containerClass = "";
  if (task.done) {
    containerClass = "done";
  } else if (new Date(task.date) < today) {
    containerClass = "overdue";
  }
  const { handleChange } = useContext(TasksContext);
  return (
    <div className={`container ${containerClass}`}>
      <input
        className="cbx"
        type="checkbox"
        checked={task.done}
        onChange={({ target }) =>
          handleChange({ ...task, done: target.checked })
        }
      />
      <label className="taskName">{task.name}</label>
      <label className="date">{task.date}</label>
    </div>
  );
};

export default TaskItem;
