export const setTodos = (state, action) => {
  // action.payload.sort((a,b)=> a.position - b.position)
  return {
    ...state,
    todos: action.payload,
  };
};