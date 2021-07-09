export const dndReorder = (state, action) => {
  console.log(action)
  action.payload.sort((a,b)=> a.position - b.position)
  return {
    ...state,
    todos: action.payload,
    menuAct: true,
  }
}