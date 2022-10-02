import React from "react";
import "../styles/ExpenseItem.css";
import TExpense from "../types";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

//must define a type for the prop type - this is required as it defines the type being destructured
interface expenseItemProps {
  expense: TExpense;
}

const ExpenseItem = ({ expense }: expenseItemProps): JSX.Element => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
