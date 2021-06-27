import { React } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../actions/authAction";

function Header({ isAuthenticated }) {
  const dispatch = useDispatch();
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Link to="/dashboard">
        <h2>Header</h2>
      </Link>
      <div>
        {isAuthenticated && (
          <NavLink to="/dashboard" activeClassName="is-active">
            Dashborad
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink to="/addExpense" activeClassName="is-active">
            Add Expense
          </NavLink>
        )}
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>

        {isAuthenticated && (
          <button onClick={dispatch(startLogout)}>Log out</button>
        )}
      </div>
    </div>
  );
}

export default Header;
