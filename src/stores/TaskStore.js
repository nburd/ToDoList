// import { observable, decorate } from "mobx";
//import { observable } from "mobx-react";
import TasksLogic from "../TasksLogic";
import { observable } from "mobx-react";

class TaskStore {
  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
  }

  @observable tasks = [];
  validationError = null;

  addTask(name, date, localeStrings) {
    if (name && date) {
      const task = { ...{ name, date }, done: false };
      this.tasks = TasksLogic.addToTop(this.tasks, task);
      this.validationError = null;
    } else {
      this.validationError = localeStrings.validationError;
    }
  }

  changeTask(task) {
    this.tasks = TasksLogic.changeTask(this.tasks, task);
  }

  getTasks() {
    return this.tasks;
  }
}

// decorate(TaskStore, {
//   tasks: observable,
//   validationError: observable
// });
const taskStore = new TaskStore();
export default taskStore;
