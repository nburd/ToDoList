import React from "react";
import TaskItem from "./TaskItem";
import strings from "./strings";
import Localize from "./Localize";
import { observer, inject } from "mobx-react";
let c = 0;
const TaskList = inject("taskStore")(
  observer(({ taskStore }) => {
    console.log(c++);
    const localeStrings = Localize(strings);
    const listItems = taskStore.sortTasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onChange={(done) => {
          taskStore.changeTask({ ...task, done: done });
        }}
      />
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
  })
);

export default TaskList;
