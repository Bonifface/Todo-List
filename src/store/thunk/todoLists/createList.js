import { setLoading } from "../../rootReducer";
import { addListAction } from "../../rootReducer";
import axios from "axios";

export const createTodoList = (name, description) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.post("http://localhost:5000/api/todo-lists", {
      name: name,
      description: description,
    });
    dispatch(addListAction(res.data));
    dispatch({ type: "CREAT_MOD" });

    setTimeout(() => dispatch(setLoading(false)), 300);
  };
};
