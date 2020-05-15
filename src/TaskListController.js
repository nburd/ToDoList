import React from "react";
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

class TaskListController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  handleAddTaskItem = (taskName, dueDate) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      taskName: taskName,
      isDone: false,
      dueDate: dueDate,
    };
    const tasks = [newTask, ...this.state.tasks];
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div>
        <AddTaskForm onTaskAdded={this.handleAddTaskItem} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskListController;
