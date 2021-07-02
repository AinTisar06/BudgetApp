import React from "react";
import moment from "moment";

function Expense({ expense: { id, amount, createdAt, description } }) {
  return (
    <div className="expense">
      {/* <Link to={`/edit/${id}`} className="home__list__title">
        <h3>{description}</h3>
      </Link> */}
      <div className="expense__title">
        <h3>{description}</h3>
        <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
      </div>
      <p className="expense__amount">
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(amount)}
      </p>
      <div className="expense__icons">ICONS</div>
    </div>
  );
}

export default Expense;
