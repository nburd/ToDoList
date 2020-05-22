import { observable, decorate } from "mobx";

const validation_name_empty = 'validationError';
let globalId = 0;

class TasksStore {
  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
  }

  tasks = [];
  validationError = null;

  addTask(name, date) {
    if (name && date) {
      const newTask = {
        id: globalId++,
        done: false,
        ...{name, date}
      };
      this.tasks = [newTask, ...this.tasks];
      this.validationError = null;
    } else {
      this.validationError = validation_name_empty;
    }
  }

  changeTask(task) {
    const idx = this.tasks.findIndex((a) => a.id === task.id);
    const head = this.tasks.slice(0, idx);
    const tail = this.tasks.slice(idx + 1);
    this.tasks = [...head, task, ...tail];
  }

  getSortTasks() {
    const tasksSorted = [...this.tasks];
    tasksSorted.sort(this.compare);
    return tasksSorted;
  }

  compare = (a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (a.done && !b.done) {
      return 1;
    }
    if (!a.done && b.done) {
      return -1;
    }
    if (aDate > bDate) {
      return 1;
    }
    if (aDate < bDate) {
      return -1;
    }
    return 0;
  };
}

decorate(TasksStore, {
  tasks: observable,
  validationError: observable
});
const taskStore = new TasksStore();
export default taskStore;
