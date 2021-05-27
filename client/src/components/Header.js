import { React } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  return(
    <div>
      <h1>Header</h1>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/addExpense">Add Expense</NavLink>
      <NavLink to="/edit">Edit</NavLink>
      <NavLink to="/help">Help</NavLink>
    </div>
  )
}