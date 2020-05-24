import React, { useCallback } from "react";
import strings from "./strings.js";
import Localize from "./Localize";
import { observer, inject } from "mobx-react";

const AddTaskForm = inject("taskStore")(
  observer(({ taskStore }) => {
    const localeStrings = Localize(strings);

    const handleClick = () => taskStore.addTask();
    const handleNameChange = useCallback(({target}) => taskStore.setName(target.value), [taskStore]);
    const handleDateChange = useCallback(({target}) => taskStore.setDate(target.value), [taskStore]);

    return (
      <div className="form">
        <div>
          <label className="formLabel">{localeStrings.name + ":"} </label>
          <input type="text" onChange={handleNameChange}
          />
        </div>
        <div>
          <label className="formLabel">{localeStrings.dueDate + ":"}</label>
          <input type="date" onChange={handleDateChange}
          />
        </div>
        <div>
          <button className="addTaskButton" onClick={handleClick}>
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
