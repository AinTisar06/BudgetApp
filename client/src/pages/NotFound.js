import { React } from "react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
      <p>404! Error</p>
      <Link to="/">Home</Link>
    </div>
  )
}