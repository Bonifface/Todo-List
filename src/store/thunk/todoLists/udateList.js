import axios from "axios";
import {updateListAction} from "../../rootReducer";
import {url} from "../configs/configs";

export const updateList = (list, name, description) => {
  return async (dispatch) => {
    const res = await axios.put(`${url}/todo-lists`, {
      _id: list._id,
      name: name,
      description: description,
    });
    dispatch(updateListAction(res.data))
  };
};
