import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { removeExpense } from "../actions/expensesAction";
import { useHistory } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Expense({ expense: { id, amount, createdAt, description, note } }) {
  const dispath = useDispatch();
  const history = useHistory();
  const handleDelete = () => {
    dispath(removeExpense(id));
  };
  const handleEdit = () => {
    history.push(`/edit/${id}`);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);

  return (
    <div className="expense">
      <p className="expense__date">{moment(createdAt).format("DD/MM/YYYY")}</p>
      <h6 className="expense__title">{description}</h6>
      <p className="expense__note">{note}</p>
      <p className="expense-amount">
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(amount)}
      </p>
      <div className="expense-icons">
        <CopyToClipboard
          text={amount}
          onCopy={() => {
            setShow(true);
          }}
        >
          <div className="expense-icons-copy">
            {show && <div className="expense-icons-modal">Amount Copied</div>}
          </div>
        </CopyToClipboard>
        <div className="expense-icons-edit" onClick={handleEdit}></div>
        <div className="expense-icons-delete" onClick={handleDelete}></div>
      </div>
    </div>
  );
}

export default Expense;
