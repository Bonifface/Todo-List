import axios from "axios";
import {setLoading} from "../../rootReducer";
import { deleteListAction } from "../../rootReducer";

export const deleteTodoList = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.delete(`http://localhost:5000/api/todo-lists/${id}`);
    dispatch(deleteListAction(res.data));
    setTimeout(()=>dispatch(setLoading(false)),300);
  };
};
