import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashborad
      </NavLink>
      <NavLink to="/addExpense" activeClassName="is-active">
        Add Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </>
  );
};

export default Navbar;
