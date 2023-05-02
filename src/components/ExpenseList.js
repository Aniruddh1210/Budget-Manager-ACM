import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = () => {
    const expenses = [
        { id:1212121, name:'Shopping',cost :50 },
        { id:1212121, name:'idk',cost :60 },
        { id:1212121, name:'blah',cost :70 },
        { id:1212121, name:'bruh',cost :80 },
        { id:1212121, name:'acha',cost :90 },
    ];
    return(
        <ul className="list-group">
            {expenses.map((expense)=>(
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}/>
            ))}
        </ul>
    );
};

export default ExpenseList;