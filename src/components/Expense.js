import React from "react";
import moment from "moment";

function Expense({ expense: { id, amount, createdAt, description } }) {
  return (
    <div className="expense">
      <div className="expense__title">
        <h6>{description}</h6>
        <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
      </div>
      <p className="expense-amount">
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(amount)}
      </p>
      <div className="expense-icons">
        <div className="expense-icons-edit"></div>
        <div className="expense-icons-delete"></div>
      </div>
    </div>
  );
}

export default Expense;
