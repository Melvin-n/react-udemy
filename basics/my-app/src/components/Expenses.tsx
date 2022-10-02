import React from "react";
import TExpense from "../types";
import ExpenseItem from "./ExpenseItem";
import "../styles/Expenses.css";

interface TExpensesArrayProp {
  expensesList: TExpense[];
}

const Expenses = ({ expensesList }: TExpensesArrayProp): JSX.Element => {
  return (
    <div className="expenses">
      {expensesList.map((expenseItem) => (
        <ExpenseItem expense={expenseItem} />
      ))}
    </div>
  );
};

export default Expenses;
