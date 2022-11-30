import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div>
            <input type="submit" value="login" />
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
