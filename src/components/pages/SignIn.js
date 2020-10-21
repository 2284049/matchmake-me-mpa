import React from "react";
import { Link } from "react-router-dom";
import purpleLogo from "../../icons/purplelogo.png";
import taskIcon from "../../icons/task.svg";
import loginIcon from "../../icons/account-login.svg";

export default function SignIn() {
  return (
    <div className="container">
      <div className="row mb-7">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img src={purpleLogo} width="40px" alt="Matchmake Me Logo" />
          <h2 className="text-brand text-primary d-inline mt-2 ml-2">
            Matchmake Me
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5 mr-lg-4">
          <div className="card">
            <div className="card-body text-dark">
              <img src={taskIcon} width="26px" className="mt-n4 mr-2" alt="" />
              <h2 className="d-inline">Nice to meet you</h2>
              <p className="font-sans-serif mt-3 mb-5">
                Sign up for a free matchmaking account.
              </p>
              <div className="form-group">
                <label
                  for="email-sign-up-input"
                  className="lead font-sans-serif"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-sign-up-input"
                />
                <p className="text-danger" id="email-sign-up-error"></p>
              </div>
              <div className="form-group">
                <label
                  for="password-sign-up-input"
                  className="lead font-sans-serif"
                >
                  Create a password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password-sign-up-input"
                />
                <p className="text-danger" id="password-sign-up-error"></p>
              </div>
              <Link
                to="/questionnaire"
                className="btn btn-primary btn-lg font-sans-serif mt-5"
                id="sign-up-button"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 ml-lg-4">
          <div className="card mt-8 mt-md-0">
            <div className="card-body text-dark">
              <img src={loginIcon} className="mt-n4 mr-2" width="26px" alt="" />
              <h2 className="d-inline">Welcome back</h2>
              <p className="font-sans-serif mt-3 mb-5">
                Log in with your email address and password.
              </p>
              <div className="form-group">
                <label for="email-input" className="lead font-sans-serif">
                  Email address
                </label>
                <input type="email" className="form-control" id="email-input" />
              </div>
              <div className="form-group">
                <label for="password-input" className="lead font-sans-serif">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="password-input"
                />
              </div>
              <Link
                to="/matches"
                className="btn btn-primary btn-lg font-sans-serif mt-5"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
