export const reorder = (state, action) => {
  console.log(action);
  const reorder = (action) => {
    const result = Array.from(action.todos);
    const [removed] = result.splice(action.fromIndex, 1);
    result.splice(action.toIndex, 0, removed);
    console.log(result)
    return result;
  };
  return {
    ...state,
    todos: reorder(action)
  };
};
