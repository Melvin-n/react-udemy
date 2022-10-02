import React from "react";
import { expenses } from "./data";
import Expenses from "./components/Expenses";

function App(): JSX.Element {
  return <Expenses expensesList={expenses} />;
}

export default App;
