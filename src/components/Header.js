import { React } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/auth";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <NavLink to="/" exact>
        <h2>Header</h2>
      </NavLink>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashborad
      </NavLink>
      <NavLink to="/addExpense" activeClassName="is-active">
        Add Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
      <button onClick={dispatch(startLogout)}>Log out</button>
    </div>
  );
}

export default Header;
