import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App =() => {
  return (
<AppProvider>
<div className="container">


  <h1 className='mt-3'> W BUDGET PLANNER</h1>
  <div className="row mt-3">

    <div className="col-sm">
      <Budget />
      </div>

    <div className="col-sm">
      <RemainingBudget />
      </div>
      
    <div className="col-sm">
      <Spent />
      </div>

  </div>


<h3 className="mt-3">Expenses</h3>
<div className="row mt-3">
  <div className="col-sm">
    <ExpenseList />
  </div>
</div>

<p></p>
<h3 className="mt-3">Add your expenses</h3>
<div className="mt-3">
  <div className="col -sm">
    <AddExpenseForm />
  </div>
</div>
</div>
</AppProvider>
  )
}

export default App;
