export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK"

let globalId = 0;
export  const addTask = ({name, date}) => ({
    type: ADD_TASK,
    id: globalId++,
    name,
    date
});

export  const toggleTask = id => ({
    type: TOGGLE_TASK,
    id
});