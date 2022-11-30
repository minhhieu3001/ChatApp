import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">User Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="User name"
                id="username"
              />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                id="email"
              />
              <br />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
              />
              <br />
              <br />
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                id="confirmPassword"
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image"></div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input type="file" className="form-control" id="image" />
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
