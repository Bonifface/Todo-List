import axios from "axios";
import {setLoading, setTodoAction} from "../../rootReducer";
import {url} from "../configs/configs";

export const getAllTodos = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get(`${url}/todo-lists/${id}`);
    dispatch(setTodoAction(res.data));
    setTimeout(()=>dispatch(setLoading(false)),300);
  };
};
