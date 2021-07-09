import axios from "axios";
import {setLoading} from "../../rootReducer";
import { deleteListAction } from "../../rootReducer";
import {url} from "../../../configs/configs";

export const deleteTodoList = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.delete(`${url}/todo-lists/${id}`);
    dispatch(deleteListAction(res.data));
    setTimeout(()=>dispatch(setLoading(false)),300);
  };
};
