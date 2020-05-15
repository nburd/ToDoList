import React from "react";
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

class TaskListController extends React.Component {
  constructor(props) {
    super(props);
    this.listItemComponent = React.createRef();
    this.state = {
      tasks: [],
    };
  }

  handleAddTaskItem = (taskName, dueDate) => {
    this.listItemComponent.current.addTask(taskName, dueDate);
  };

  render() {
    return (
      <div>
        <AddTaskForm onTaskAdded={this.handleAddTaskItem} />
        <TaskList ref={this.listItemComponent} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskListController;
