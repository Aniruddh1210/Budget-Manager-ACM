import React from "react";
import {TiDelete} from 'react-icons/ti';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3 text-primary">
                    Rs{props.cost}
                </span>
                <TiDelete color="black" size = '1.5em' onClick={handleDeleteExpense}></TiDelete>

            </div>

        </li>
    );
};

export default ExpenseItem;