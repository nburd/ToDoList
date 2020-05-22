import React, { useCallback } from "react";
import strings from "./strings.js";
import Localize from "./Localize";
import { observer, inject } from "mobx-react";

const AddTaskForm = inject("taskStore")(
  observer(({ taskStore }) => {
    const localeStrings = Localize(strings);

    const handleClick = useCallback(() => {
      taskStore.addTask();
    }, [taskStore]);

    return (
      <div className="form">
        <div>
          <label className="formLabel">{localeStrings.name + ":"} </label>
          <input type="text" onChange={({ target }) => taskStore.setName(target.value)}
          />
        </div>
        <div>
          <label className="formLabel">{localeStrings.dueDate + ":"}</label>
          <input type="date" onChange={({ target }) => taskStore.setDate(target.value)}
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
