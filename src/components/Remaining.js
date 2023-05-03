import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RemainingBudget = () =>{
    const{expenses,budget} = useContext(AppContext);

    const sumOfAllExpenses = expenses.reduce((total,item)=>{
        return (total = total +item.cost);
    },0);

    const alertType = sumOfAllExpenses > budget ? 'alert-danger' : 'alert-success';

    return(
    <div className={`alert ${alertType}`}>
        <span>Remaining : Rs{budget - sumOfAllExpenses} </span>
    </div>
    );
};

export default RemainingBudget;