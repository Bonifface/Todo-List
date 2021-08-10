export const cleanMessage =(state, action)=> {
  console.log(action.payload)
  return{
    ...state,
    message: action.payload
  }
}