import { React } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/authAction";

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="login__background"></div>
      <div className="login__card">
        <div className="login__card-img"></div>
        <h1 className="login__card-title">Budget</h1>
        <h5 className="login__card-body">
          It's time to get your expenses under control.
        </h5>
        <button onClick={dispatch(startLogin)} className="login__card__btn">
          <span className="login__card__btn-text">Login with Google</span>
          <span className="login__card__btn-logo"></span>
        </button>
      </div>
    </div>
  );
}

export default Login;
