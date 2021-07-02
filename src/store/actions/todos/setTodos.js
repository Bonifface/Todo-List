export const setTodos = (state, action) => {
  return {
    ...state,
    todos: action.payload,
  };
};