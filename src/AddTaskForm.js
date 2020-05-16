import React from "react";
import TasksContext from "./TasksContext";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
    };
  }

  handleChangeText = ({ target }) => {
    this.setState({ name: target.value });
  };

  handleChangeDate = ({ target }) => {
    this.setState({ date: target.value });
  };

  render() {
    return (
      <TasksContext.Consumer>
        {({ handleAdd, validation }) => {
          return (
            <div className="form">
              <div>
                <label className="formLabel">Task name: </label>
                <input
                  type="text"
                  onChange={this.handleChangeText}
                  value={this.state.name}
                />
              </div>
              <div>
                <label className="formLabel">Due date: </label>
                <input type="date" onChange={this.handleChangeDate} />
              </div>
              <div>
                <button
                  className="addTaskButton"
                  onClick={
                    () => handleAdd({ ...this.state, done: false }) //Придётся немного потерпеть, чтоб сразу всё радикально не менять
                  }
                >
                  Add task
                </button>
                {validation && (
                  <span className="validation-error">{validation}</span>
                )}
              </div>
            </div>
          );
        }}
      </TasksContext.Consumer>
    );
  }
}

export default AddTaskForm;
