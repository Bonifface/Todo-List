export const editTodoText = (state, action) => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo._id === action.payload._id
        ? { ...todo, text: action.payload.text }
        : todo
    ),
    inEditMod: false,
  };
};
