import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: props.tasks };
  }

  handleChangeTaskItem = (task) => {
    const oldArray = this.state.tasks;
    const idx = oldArray.findIndex((a) => a.id === task.id);
    const newArr = [...oldArray.slice(0, idx), task, ...oldArray.slice(idx + 1)];
    this.setState({ tasks: newArr });
  };

  addTask(taskName, dueDate) {
    const newTask = {
      id: this.state.tasks.length + 1,
      taskName: taskName,
      isDone: false,
      dueDate: dueDate,
    };
    const tasks = [newTask, ...this.state.tasks];
    this.setState({ tasks: tasks });
  }

  render() {
    const tasks = this.state.tasks.slice();
    tasks.sort(compare);

    const listItems = tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onChange={this.handleChangeTaskItem}
      />
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
  }
}

function compare(a, b) {
  const aDate = new Date(a.dueDate);
  const bDate = new Date(b.dueDate);
  if (a.isDone && !b.isDone) {
    return 1;
  }
  if (!a.isDone && b.isDone) {
    return -1;
  }
  if (aDate > bDate) {
    return 1;
  }
  if (aDate < bDate) {
    return -1;
  }
  return 0;
}

export default TaskList;
