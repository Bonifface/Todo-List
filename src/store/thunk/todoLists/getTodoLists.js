import { setTodoListsAction } from "../../rootReducer";
import { setLoading } from "../../rootReducer";
import axios from "axios";

export const getTodoLists = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get("http://localhost:5000/api/todo-lists");
    dispatch(setTodoListsAction(res.data));
    setTimeout(()=>dispatch(setLoading(false)),300);
  };
};
