export const createList = (state, action) => {
  return {
    ...state,
    todoLists: [...state.todoLists, action.payload],
  };
};
