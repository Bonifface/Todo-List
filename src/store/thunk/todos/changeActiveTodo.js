import { changeActiveAction } from "../../rootReducer";
import axios from "axios";
import {url} from "../configs/configs";

export const changeActivePost = (todo) => {
  return async (dispatch) => {
    const res = await axios.put(`${url}/todo-list`, {
      _id: todo._id,
      text: todo.text,
      active: !todo.active,
    });
    dispatch(changeActiveAction(res.data));
  };
};
