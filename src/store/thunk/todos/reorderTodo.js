import axios from "axios";

import { url } from "../../../configs/configs";


export const reorderTodo = (id,todos, fromIndex, toIndex) => {
  return async (dispatch) => {
    dispatch({ type: "REORDER", todos, fromIndex, toIndex });
    const res = await axios.put(`${url}/todo-lists/${id}`, {
      id: id,
      todos: todos,
      fromIndex: fromIndex,
      toIndex: toIndex,
    });
    console.log(res)
  };
};
