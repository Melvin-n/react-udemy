import React from "react";
import "../styles/ExpenseItem.css";
import TExpense from "../types";

//must define a type for the prop type
interface expenseItemProps {
  expense: TExpense;
}

const ExpenseItem = ({ expense }: expenseItemProps): JSX.Element => {
  return (
    <div className="expense-item">
      <div>{expense.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
