import React from "react";
import TaskItem from "./TaskItem";
import TasksLogic from "./TasksLogic";
import strings from "./strings";
import Localize from "./Localize";
import { observer, inject } from "mobx-react";

const TaskList = inject("taskStore")(
  observer(({ taskStore }) => {
    const localeStrings = Localize(strings);
    const listItems = TasksLogic.sort(taskStore.getTasks()).map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        OnChange={(done) => {
          taskStore.changeTask({ ...task, done: done });
        }}
      />
    ));

    window.localStorage.setItem("tasks", JSON.stringify(taskStore.getTasks()));
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
  })
);

export default TaskList;
