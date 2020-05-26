import React from "react";
import TaskItem from "./TaskItem";
import TasksLogic from "./TasksLogic";
import strings from "./strings";
import Localize from "./Localize";
import { toggleTask } from "./actions/tasksActions";
import { connect } from "react-redux";

const TaskList = ({tasks, toggleTask}) => {
  const localeStrings = Localize(strings);
  const listItems = TasksLogic.sort(tasks).map((task) => (
    <TaskItem key={task.id} task={task} toggleTask={() => toggleTask(task.id)}/>
  ));
  return (
    <div>
      <div className="container header">
        <label className="cbx">{localeStrings.isDone}</label>
        <label className="taskName">{localeStrings.name}</label>
        <label className="date">{localeStrings.dueDate}</label>
      </div>
      {listItems}
    </div>
  );
};


const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
