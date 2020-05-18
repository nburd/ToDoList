import React from "react";

const TasksContext = React.createContext({tasks: [], handleAdd: () => {}});

export default TasksContext;