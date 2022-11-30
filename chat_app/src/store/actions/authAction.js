import axios from "axios";

export const userRegister = (data) => {
  return async (dispatch) => {
    axios
      .post("http://localhost:5000/register", data)
      .catch((err) => console.log(err));
  };
};
