export const updateList = (state, action) => {
  return {
    ...state,
    todoLists: state.todoLists.map((list) =>
      list._id === action.payload._id
        ? { ...list, name: action.payload.name, description: action.payload.description }
        : list
    ),
    inEditMod: false,
  };
};
