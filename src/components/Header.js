import { React } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  return(
    <div>
      <h1>Header</h1>
      <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
      <NavLink to="/addExpense" activeClassName="is-active">Add Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  )
}