import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TasksContext from "./contexts/TasksContext";
import TasksLogic from "./TasksLogic";
import LocalizationContext from "./contexts/LocalizationContext";
import strings from "./strings";

class TaskListController extends React.Component {
  static contextType = LocalizationContext;
  constructor(props) {
    super(props);
    console.log('AAA!',  )
    this.state = {
      tasks: JSON.parse(window.localStorage.getItem('tasks')) || [],
    };
  }

  handleAdd = (task) => {
    if (task.name && task.date) {
      this.setState({
        tasks: TasksLogic.addToTop(this.state.tasks, task),
        validation: null,
      });
    } else {
      this.setState({
        validation: strings[this.context].validationError
      });
    }
  };

  handleChange = (task) => {
    console.log('handleChange', task);
    this.setState({ tasks: TasksLogic.changeTask(this.state.tasks, task) });
  };

  render() {
    window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    return (
      <TasksContext.Provider
        value={{
          tasks: this.state.tasks,
          validation: this.state.validation,
          handleAdd: this.handleAdd,
          handleChange: this.handleChange,
        }}
      >
        <div>
          <AddTaskForm />
          <TaskList />
        </div>
      </TasksContext.Provider>
    );
  }
}

export default TaskListController;
