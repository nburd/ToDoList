import React, { useState, useContext } from "react";
import TasksContext from "./TasksContext";
import strings from "./strings.js";
import LocalizationContext from "./LocalizationContext";

const AddTaskForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const locale = useContext(LocalizationContext);
  const { handleAdd, validation } = useContext(TasksContext);

  const localeStrings = strings[locale];
  
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
