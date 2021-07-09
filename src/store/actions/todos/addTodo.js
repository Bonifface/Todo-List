export const addTodo = (state, action) => {
  return {
    ...state,
    todos: [...action.payload],
  };
};
