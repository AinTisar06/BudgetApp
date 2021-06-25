import { React } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/auth";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={dispatch(startLogin)}>Login</button>
    </div>
  );
}

export default Login;
