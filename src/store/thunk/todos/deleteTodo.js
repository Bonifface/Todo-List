import { deleteTodoAction } from "../../rootReducer";
import axios from "axios";

export const deleteTodo = (id, listId) => {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:5000/api/todo-list/${id}`,{
      listId
    });
    dispatch(deleteTodoAction(res.data));
  };
};
