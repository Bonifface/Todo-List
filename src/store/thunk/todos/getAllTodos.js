import axios from "axios";
import {setLoading, setTodoAction} from "../../rootReducer";

export const getAllTodos = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get(`http://localhost:5000/api/todo-lists/${id}`);
    dispatch(setTodoAction(res.data));
    setTimeout(()=>dispatch(setLoading(false)),300);
  };
};
