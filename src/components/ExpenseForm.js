import './ExpenseForm.css';
import React, { useState } from "react";
const ExpenseForm = (props) => {
    // In caso di aggiornamento di stato singolo si puà usare quanto segue:

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // Mentre per utilizzare lo state una volta per memorizzare più dati/variabili utilizzare quanto segue:

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    // Entrambi gli approcci sono validi , nel primo caso il codice è più esplicativo in quanto si aggiornano gli stati uno alla volta 
    // ed è quindi più facile da leggere, il secondo approccio invece salva gli stati nella stessa funzione.

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value, // Sintassi non sempre funzionante nel caso in cui l'aggiornamento dello stato dipende dallo stato precedente
        // })
        setEnteredTitle(event.target.value);
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}; // Sintassi corretta nel caso in cui l'aggiornamento dello stato dipende dallo stato precedente
        // });
    };
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
        setEnteredAmount(event.target.value);
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });

    };
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
        setEnteredDate(event.target.value);
        // setUserInput( (prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    // In questo caso utilizziamo il "Binding bidirezionale", che si rivela molto utile quando si lavora con i form perchè consente di raccogliere
    // gli input dell'utente senza ricaricare la pagina

    return(
        <form onSubmit={submitHandler} method='POST'>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className=''  type='submit'>Add Expense</button>
            </div>
        </form>
        )
}

export default ExpenseForm;