import axios from "axios";
import { addTodoAction } from "../../rootReducer";
import { url } from "../../../configs/configs";

export const addTodo = (text, id, todoLength) => {
  return async (dispatch) => {
    const res = await axios.post(`${url}/todo-list/${id}`, {
      text: text,
      active: true,
      position: todoLength,
    });
    dispatch(addTodoAction(res.data));
  };
};
