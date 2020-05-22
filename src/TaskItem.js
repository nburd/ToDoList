import React, { useCallback } from "react";

const TaskItem = ({task, onChange}) => {
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
        onChange={useCallback(e => 
          onChange(e.target.checked), [onChange])}
      />
      <label className="taskName">{task.name}</label>
      <label className="date">{task.date}</label>
    </div>
  );
};

export default TaskItem;
