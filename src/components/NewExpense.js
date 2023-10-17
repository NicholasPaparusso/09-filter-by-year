import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    }

    const [isFormToShow, setIsFormToShow] = useState(0)

    const showForm = (event) => {
        event.preventDefault();
        if(!isFormToShow){
            setIsFormToShow(1)
        }else{
            setIsFormToShow(0)
        }
    }

    return(
        <div className='new-expense'>
            {isFormToShow === 0 && <button onClick={showForm}>Open form</button>}
            {isFormToShow != 0 && <ExpenseForm isFormToShow={showForm} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>    
    );
}

export default NewExpense;