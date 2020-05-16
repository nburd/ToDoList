let globalId = 0;

class TasksLogic {
  static sort = (tasks) => {
    const tasksSorted = [...tasks];
    tasksSorted.sort(TasksLogic.compare);
    return tasksSorted;
  };

  static addToTop = (tasks, task) => {
    const newTask = {
      id: globalId++,
      ...task,
    };
    return [newTask, ...tasks];
  };

  static changeTask = (tasks, task) => {
    const idx = tasks.findIndex((a) => a.id === task.id);
    const head = tasks.slice(0, idx);
    const tail = tasks.slice(idx + 1);
    console.log("idx found for id", task, tasks, idx, head, tail);
    return [...head, task, ...tail];
  };

  static compare = (a, b) => {
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

export default TasksLogic;
