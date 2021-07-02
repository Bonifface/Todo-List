export const createList = (state, action) => {
  console.log(action.payload)
  return {
    ...state,
    todoLists: [...state.todoLists, action.payload],
  };
};
