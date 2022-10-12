import React from "react";
import TExpense from "../types";
import ExpenseItem from "./ExpenseItem";
import "../styles/Expenses.css";
import Card from "./Card";

interface TExpensesArrayProp {
  expensesList: TExpense[];
}

const Expenses = ({ expensesList }: TExpensesArrayProp): JSX.Element => {
  return (
    <Card className="expenses">
      {expensesList.map((expenseItem) => (
        <ExpenseItem expense={expenseItem} />
      ))}
    </Card>
  );
};

export default Expenses;
