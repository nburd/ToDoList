import { observable, decorate } from "mobx";

const validation_name_empty = 'validationError';
let globalId = 0;

class TaskStore {
  constructor() {
    this.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
  }

  tasks = [];
  validationError = null;
  taskValues = {
    name : "", 
    date : null
  };

  setName(name) {
    this.taskValues.name = name;
  }

  setDate(date) {
    this.taskValues.date = date;
  }

  addTask() {
    if (this.taskValues.name && this.taskValues.date) {
      const newTask = {
        id: globalId++,
        done: false,
        name: this.taskValues.name,
        date: this.taskValues.date
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

decorate(TaskStore, {
  tasks: observable,
  validationError: observable
});
const taskStore = new TaskStore();
export default taskStore;
