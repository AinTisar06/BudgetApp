import { React } from "react";

export default function Edit(props) {
  return (
    <div>
      <p>This project is {props.match.params.id}</p>
    </div>
  )
}