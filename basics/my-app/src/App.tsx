import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import { expenses } from "./data";

function App(): JSX.Element {
  return (
    <div className="app">
      <ExpenseItem expense={expenses[0]} />
    </div>
  );
}

export default App;
