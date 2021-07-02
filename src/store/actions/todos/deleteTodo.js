export const deleteTodo = (state, action) => {
  console.log(action.payload)
  return {
    ...state,
    todos: state.todos.filter((todo) => todo._id !== action.payload._id),
  };
};