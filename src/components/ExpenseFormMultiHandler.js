import './ExpenseForm.css';
import React, { useState } from "react";
const ExpenseForm = () => {


    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const inputChangeHandler = (identifier,value) => {
        if (identifier === 'title'){
            setEnteredTitle(value);
        }else if (identifier === 'date'){
            setEnteredDate(value)
        }else{
            setEnteredAmount(value)
        }
    }

    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={ (event) => inputChangeHandler('title',event.target.value)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={ (event) => inputChangeHandler('date',event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={ (event) => inputChangeHandler('amount',event.target.value)}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className=''  type='submit'>Add Expense</button>
            </div>
        </form>
        )
}

export default ExpenseForm;