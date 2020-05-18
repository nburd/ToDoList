import React, { useState, useContext } from "react";
import TasksContext from "./contexts/TasksContext";
import strings from "./strings.js";
import Localize from "./Localize";

const AddTaskForm = () => {
  const localeStrings = Localize(strings);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const { handleAdd, validation } = useContext(TasksContext);
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
        <button
          className="addTaskButton"
          onClick={
            () => handleAdd({ ...{ name, date }, done: false }) //Придётся немного потерпеть, чтоб сразу всё радикально не менять
          }
        >
          {localeStrings.add}
        </button>
        {validation && <span className="validation-error">{validation}</span>}
      </div>
    </div>
  );
};

export default AddTaskForm;
