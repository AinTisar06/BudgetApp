import { React } from "react";
import ExpenseList from "../components/ExpenseList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <ExpenseList />
      <Footer />
    </div>
  );
};

export default Dashboard;
