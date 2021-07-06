import { React } from "react";
import ExpenseList from "../components/ExpenseList";
import Header from "../components/Header";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
