import axios from "axios";
import { addTodoAction } from "../../rootReducer";

export const addTodo = (values, id) => {
  return async (dispatch) => {
    const res = await axios.post(`http://localhost:5000/api/todo-list/${id}`, {
      text: values,
      active: true,
    });
    dispatch(addTodoAction(res.data));
  };
};
