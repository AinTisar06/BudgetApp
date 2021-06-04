import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function Expense(props) {
  return (
    <div>
      <Link to={`/edit/${props.expense.id}`} className="home__list__title">
        <h3>{props.expense.description}</h3>
      </Link>
      <p>
        {props.expense.amount} - {moment(props.expense.createdAt).fromNow()}
      </p>
    </div>
  );
}

export default Expense;
