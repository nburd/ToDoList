import React, { useState, useCallback } from "react";
import strings from "./strings.js";
import Localize from "./Localize";
import { observer, inject } from "mobx-react";

const AddTaskForm = inject("taskStore")(
  observer(({ taskStore }) => {
    const localeStrings = Localize(strings);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    
    const handleClick = useCallback(() => {
      taskStore.addTask(name, date)
    }, 
    [taskStore, name, date]);

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
            onClick={handleClick}
          >
            {localeStrings.add}
          </button>
          {taskStore.validationError && (
            <span className="validation-error">
              {localeStrings[taskStore.validationError]}
            </span>
          )}
        </div>
      </div>
    );
  })
);

export default AddTaskForm;
