import React from "react";

const TaskItem = ({ task, toggleTask }) => {
  const today = new Date();
  var containerClass = "";
  if (task.done) {
    containerClass = "done";
  } else if (new Date(task.date) < today) {
    containerClass = "overdue";
  }
  return (
    <div className={`container ${containerClass}`}>
      <input
        className="cbx"
        type="checkbox"
        checked={task.done}
        onChange={toggleTask}
      />
      <label className="taskName">{task.name}</label>
      <label className="date">{task.date}</label>
    </div>
  );
};

export default TaskItem;
