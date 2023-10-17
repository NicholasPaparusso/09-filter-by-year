import React, { useState } from 'react';
import './ExpensesList.css';
import Expense from './Expense';

const ExpensesList = (props)=>{
    // let isEmpty = props.expenses.length === 0 ? <p className="text-white conform-padding">No expenses found</p> : props.expenses.map((item) => {
    //     return(   
    //       <Expense
    //             key={item.id}
    //             title={item.title}
    //             amount={item.amount}
    //             date={item.date}
    //             />
    //             )
    //     } )
  
    let expensesContent = <p className="text-white conform-padding">No expenses found.</p>
    
    if(props.expenses.length === 0){
        return <h2 className='expenses-list__fallback'>{expensesContent}</h2>
    }
    return(
        <ul className="expenses-list">
        {props.expenses.map((item) => {
         return(   
           <Expense
                 key={item.id}
                 title={item.title}
                 amount={item.amount}
                 date={item.date}
                 />
                 )
         } )}
        </ul>
    )
}
export default ExpensesList