import axios from "axios";
import {updateListAction} from "../../rootReducer";

export const updateList = (list, name, description) => {
  console.log(name)
  return async (dispatch) => {
    const res = await axios.put("http://localhost:5000/api/todo-lists", {
      _id: list._id,
      name: name,
      description: description,
    });
    dispatch(updateListAction(res.data))
  };
};
