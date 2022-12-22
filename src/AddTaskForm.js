import React, { useState, useCallback } from "react";
import strings from "./strings.js";
import Localize from "./Localize";
import { addTask } from "./actions/tasksActions";
import { connect } from "react-redux";

const AddTaskForm = ({ dispatch, validationError }) => {
  const localeStrings = Localize(strings);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleAddTask = useCallback(() => dispatch(addTask({ name, date })), [
    name,
    date,
    dispatch,
  ]);

  return (
    <div className="form">
      <div>
        <label className="formLabel">{localeStrings.name + ":"} </label>
        <input type="text" onChange={({ target }) => setName(target.value)} />
      </div>
      <div>
        <label className="formLabel">{localeStrings.dueDate + ":"}</label>
        <input type="date" onChange={({ target }) => setDate(target.value)} />
      </div>
      <div>
        <button className="addTaskButton" onClick={handleAddTask}>
          {localeStrings.add}
        </button>
        {validationError && (
          <span className="validation-error">
            {localeStrings[validationError]}
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  validationError: state.validationError,
});

export default connect(mapStateToProps)(AddTaskForm);
