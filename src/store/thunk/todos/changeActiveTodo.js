import { changeActiveAction } from "../../rootReducer";
import axios from "axios";

export const changeActivePost = (todo) => {
  return async (dispatch) => {
    const res = await axios.put("http://localhost:5000/api/todo-list", {
      _id: todo._id,
      text: todo.text,
      active: !todo.active,
    });
    dispatch(changeActiveAction(res.data));
  };
};
