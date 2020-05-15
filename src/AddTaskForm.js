import React from "react";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      dueDate: ''
    };
  }

  handleChangeText = (event) => {
    this.setState({ taskName: event.target.value });
  };

  handleChangeDate = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  handleAddNewTask = (event) => {
    const taskName = this.state.taskName;
    const dueDate = this.state.dueDate;
    if (taskName.length === 0) {
      alert("Task name cannot be empty.");
      return;
    }

    if (dueDate=== "") {
      alert("Due date cannot be null.");
      return;
    }

    this.setState({ taskName: '' });
    this.props.onTaskAdded(taskName, dueDate);
  };

  render() {
    return (
      <div className="form">
        <div>
          <label className="formLabel">Task name: </label>
          <input 
            type="text" 
            onChange={this.handleChangeText} 
            value={this.state.taskName} />
        </div>
        <div>
          <label className="formLabel">Due date: </label>
          <input 
            type="date" 
            onChange={this.handleChangeDate} />
        </div>
        <div>
          <button 
            className="addTaskButton" 
            onClick={this.handleAddNewTask}>
            Add task
          </button>
        </div>
      </div>
    );
  }
}

export default AddTaskForm;
