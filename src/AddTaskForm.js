import React from "react";
import TasksContext from "./TasksContext";
import strings from "./strings.js";
import LocalizationContext from "./LocalizationContext";

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
      <LocalizationContext.Consumer>
        {(value) => {
          return (
            <TasksContext.Consumer>
              {({ handleAdd, validation }) => {
                const localeStrings = strings[value];
                return (
                  <div className="form">
                    <div>
                      <label className="formLabel">
                        {localeStrings.name + ":"}{" "}
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChangeText}
                        value={this.state.name}
                      />
                    </div>
                    <div>
                      <label className="formLabel">
                        {localeStrings.dueDate + ":"}
                      </label>
                      <input type="date" onChange={this.handleChangeDate} />
                    </div>
                    <div>
                      <button
                        className="addTaskButton"
                        onClick={
                          () => handleAdd({ ...this.state, done: false }) //Придётся немного потерпеть, чтоб сразу всё радикально не менять
                        }
                      >
                        {localeStrings.add}
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
        }}
      </LocalizationContext.Consumer>
    );
  }
}

export default AddTaskForm;
