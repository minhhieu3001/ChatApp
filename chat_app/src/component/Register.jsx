import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/actions/authAction.js";

const Register = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [loadImage, setLoadImage] = useState("");

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const fileHandle = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        [e.target.name]: e.target.files[0],
      });

      const reader = new FileReader();
      reader.onload = function (e) {
        setLoadImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const register = (e) => {
    const { username, email, password, confirmPassword, image } = state;
    e.preventDefault();

    const formData = new FormData();

    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", image);

    dispatch(userRegister(formData));
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="User name"
                id="username"
                onChange={inputHandle}
                name="username"
                value={state.username}
              />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="email"
                onChange={inputHandle}
                name="email"
                value={state.email}
              />
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                onChange={inputHandle}
                name="password"
                value={state.password}
              />
              <br />
              <br />
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                id="confirmPassword"
                onChange={inputHandle}
                name="confirmPassword"
                value={state.confirmPassword}
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? (
                    <img src={loadImage} width="100px" height="100px" alt="#" />
                  ) : (
                    ""
                  )}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={fileHandle}
                    name="image"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/login"> Login </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

//rafce
