import { deleteTodoAction } from "../../rootReducer";
import axios from "axios";
import {url} from "../../../configs/configs";

export const deleteTodo = (id, listId) => {
  return async (dispatch) => {
    const res = await axios.put(`${url}/todo-list/${id}`,{
      listId
    });
    dispatch(deleteTodoAction(res.data));
  };
};
