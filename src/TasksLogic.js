class TasksLogic {
  static sort = (tasks) => {
    const tasksSorted = [...tasks];
    tasksSorted.sort(TasksLogic.compare);
    return tasksSorted;
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
