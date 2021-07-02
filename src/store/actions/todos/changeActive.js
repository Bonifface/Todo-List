export const changeActive = (state, action) => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
        todo._id === action.payload._id
            ? { ...todo, active: action.payload.active }
            : todo
    ),
  };
};

