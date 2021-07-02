export const addTodo = (state, action) => {
  console.log(action.payload)
  return {
    ...state,
    todos: [...action.payload],
  };
};
