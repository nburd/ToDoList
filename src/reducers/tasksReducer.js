import { ADD_TASK, TOGGLE_TASK } from "../actions/tasksActions";

const VALIDATION_ERROR = "validationError";
const initialState = {
  tasks: [],
  validationError: null
};

export default function tasksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TASK: {
      if (action.name && action.date) {
        return {
          tasks: [
            ...state.tasks,
            {
              id: action.id,
              name: action.name,
              date: action.date,
              done: false,
            },
          ],
          validationError: null
        };
      }
      return {
        tasks: state.tasks,
        validationError: VALIDATION_ERROR,
      };
    }
    case TOGGLE_TASK: {
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, done: !task.done } : task
        ),
        validationError: null,
      };
    }
    default:
      return state;
  }
}