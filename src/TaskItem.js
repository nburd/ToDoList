import React, { useCallback } from "react";

const TaskItem = ({ task, onChange }) => {
  const today = new Date();
  var containerClass = "";
  if (task.done) {
    containerClass = "done";
  } else if (new Date(task.date) < today) {
    containerClass = "overdue";
  }

  const handleChange = useCallback(e => onChange(e.target.checked), [onChange]);

  return (
    <div className={`container ${containerClass}`}>
      <input
        className="cbx"
        type="checkbox"
        checked={task.done}
        onChange={handleChange}
      />
      <label className="taskName">{task.name}</label>
      <label className="date">{task.date}</label>
    </div>
  );
};

export default TaskItem;
