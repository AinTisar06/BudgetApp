import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const imgURL = useSelector((state) => state.auth.imgURL);
  const [open, setOpen] = useState(false);

  const handleProfileClick = () => {
    setOpen(() => !open);
  };

  return (
    <div className="header container">
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
        <NavLink to="/dashboard" activeClassName="is-active">
          Dashborad
        </NavLink>

        <NavLink to="/addExpense" activeClassName="is-active">
          Add Expense
        </NavLink>

        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
