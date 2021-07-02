export const setTodoLists = (state, action) => {
  return {
    ...state,
    todoLists: action.payload,
  };
};

