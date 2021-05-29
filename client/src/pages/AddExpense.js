import { React } from "react";
import { Link } from "react-router-dom";

export default function AddExpense() {
  return (
    <div>
      <p>Take a look my projects</p>
      <Link to="/edit/1">Project1</Link>
      <Link to="/edit/2">Project2</Link>
      <Link to="/edit/3">Project3</Link>
    </div>
  )
}