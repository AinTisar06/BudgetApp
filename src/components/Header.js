import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/authAction";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const imgURL = useSelector((state) => state.auth.imgURL);

  return (
    <div className="header container">
      <Link to="/dashboard" className="header__profile">
        <img
          src={`${imgURL}`}
          alt="User profil"
          className="header__profile-img"
        />
      </Link>
      <button
        onClick={dispatch(startLogout)}
        className="btn btn-logout"
      ></button>
    </div>
  );
};

export default Header;
