import React, { useState } from "react";
import { connect } from "react-redux";
import "../../styles/css/SignInForm.css";
import LoadSpiner from "../LoaderSpiner/LoaderSpiner";

import {
  loginUserFailure,
  loginUserSuccess,
  loginUserRequest
} from "../../actions/Auth/index";
import { sideDrawerClose } from "../../actions/SideDrawer";
import api from "../../services/api";

export function SignInForm({
  token,
  isAuthenticated,
  isAuthenticating,
  statusText,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  sideDrawerClose
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      loginUserRequest();
      const response = await api.post("/api/sessions", {
        email_address: email,
        password
      });

      if (response) {
        sideDrawerClose();
        loginUserSuccess(response.data.access_token);
      }
    } catch (err) {
      console.log(err);
      loginUserFailure(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="signIn-form">
        <h1 className="signIn-form-title">Sign In</h1>
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="signIn-form-input"
          id="email"
          onChange={evt => setEmail(evt.target.value)}
          value={email}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="signIn-form-input"
          id="password"
          onChange={evt => setPassword(evt.target.value)}
          value={password}
        />
        <input type="submit" value="Sign in" className="button " />
        <div className="spiner-icon">
          <LoadSpiner activate={isAuthenticating} />
        </div>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
  statusText: state.auth.statusText
});

const mapDispatchToProps = dispatch => ({
  loginUserFailure: err => dispatch(loginUserFailure(err)),
  loginUserSuccess: token => dispatch(loginUserSuccess(token)),
  loginUserRequest: () => dispatch(loginUserRequest()),
  sideDrawerClose: () => dispatch(sideDrawerClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
