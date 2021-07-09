import { setLoading , updateTodoTextAction } from "../../rootReducer";
import axios from "axios";
import {url} from "../../../configs/configs";

export const updateTodoText = (todo, text) => {
  return async (dispatch) => {
    dispatch (setLoading(true));
    const res = await axios.put(`${url}/todo-list/`, {
      _id: todo._id,
      text: text,
      active: todo.active
    })
    dispatch(updateTodoTextAction(res.data))
    setTimeout(()=>dispatch(setLoading(false)),300);
  }
}