import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';

const App =() => {
  return (
<>
<div className="container">
  <h1 className='mt-3'> W BUDGET PLANNER</h1>
  <div className="row mt-3">

    <div className="col-sm">
      <Budget />
      </div>

    <div className="col-sm">
      <Remaining />
      </div>
      
    <div className="col-sm">
      <Spent />
      </div>

  </div>
</div>
</>
  )
}

export default App;