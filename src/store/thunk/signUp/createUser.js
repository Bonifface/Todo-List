import axios from "axios";
import { url } from "../configs/configs";
import { setLoading, signUpAction } from "../../rootReducer";

export const createUser = (username, email, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${url}/authorization/signUp`, {
        username,
        email,
        password,
      });
      dispatch(signUpAction(res.data.message));
    } catch (e) {
      dispatch(signUpAction(e.response.data.message));
    } finally {
      setTimeout(() => dispatch(setLoading(false)), 300);
    }
  };
};
