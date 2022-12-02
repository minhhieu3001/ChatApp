import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
    };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        if (res.data.code == 0) {
          localStorage.setItem("token", res.data.token);
          const user = jwtDecode(res.data.token);
          localStorage.setItem("user", JSON.stringify(user));
          setIsLogin(true);
        }
      })
      .catch((er) => console.log("loi roi"));
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin]);

  return (
    <div>
      <div className="login">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputHandle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={inputHandle}
            />
          </div>

          <div>
            <input type="submit" value="login" onClick={login} />
          </div>

          <div>
            <span>
              <Link to="/register"> Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
