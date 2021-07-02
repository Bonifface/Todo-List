export const deleteList = (state, action) => {
  console.log(action.payload)
  return {
    ...state,
    todoLists:  state.todoLists.filter((list) => list._id !== action.payload._id),
    confirmed: false
  }
}