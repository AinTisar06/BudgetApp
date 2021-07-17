import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/authAction";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  return (
    <div className="header container">
      <div className="header__profile">
        <Link to="/dashboard">
          <img
            src={`${user.imgURL}`}
            alt="User profil"
            className="header__profile-img"
          />
        </Link>
        <p>{user.name}</p>
      </div>
      <button
        onClick={dispatch(startLogout)}
        className="btn btn-logout"
      ></button>
    </div>
  );
};

export default Header;
