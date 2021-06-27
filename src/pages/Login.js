import { React } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../actions/authAction";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={dispatch(startLogin)}>Login</button>
    </div>
  );
}

export default Login;
