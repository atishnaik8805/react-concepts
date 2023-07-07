import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/authSlice";

const Auth = () => {
  const loginDispatch = useDispatch();

  function login() {
    loginDispatch(authActions.login({}));
  }

  return (
    <>
      <h1>Hello from Auth</h1>
      <button onClick={login}>Log in</button>
    </>
  );
};

export default Auth;
