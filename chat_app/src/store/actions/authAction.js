import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../types/authType";

export const userRegister = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          successMessage: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {
          error: error.response.data,
        },
      });
    }
  };
};
