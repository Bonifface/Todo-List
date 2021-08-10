import { setTodoListsAction } from "../../rootReducer";
import { setLoading } from "../../rootReducer";
import axios from "axios";
import { url } from "../configs/configs";

export const getTodoLists = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get(`${url}/todo-lists`);
    dispatch(setTodoListsAction(res.data));
    setTimeout(() => dispatch(setLoading(false)), 300);
  };
};
