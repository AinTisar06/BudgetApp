import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/authAction";

const Header = ({ path }) => {
  const dispatch = useDispatch();
  const imgURL = useSelector((state) => state.auth.imgURL);
  const [open, setOpen] = useState(false);

  const handleProfileClick = () => {
    setOpen(() => !open);
  };

  return (
    <div className="header">
      <div className="header__profile">
        <img
          src={`${imgURL}`}
          alt="User profil"
          className="header__profile-img"
          onClick={handleProfileClick}
        />
        <button
          onClick={dispatch(startLogout)}
          className={
            open ? `header__profile-logout open` : `header__profile-logout`
          }
        >
          Log out
        </button>
      </div>
      <div className="nav">
        {path === "/dashboard" ? (
          <NavLink to="/addexpense" className="nav-add">Add</NavLink>
        ) : (
          <NavLink to="/dashboard" className="nav-dash">Dashboard</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
