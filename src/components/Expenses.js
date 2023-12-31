import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) =>{
    const [enteredYear, setEnteredYear] = useState("2019");  
  
    let infoDate = "2020, 2021 & 2022";

    if(enteredYear === "2020"){
      infoDate = "2019, 2021 & 2022"
    }else if(enteredYear === "2021"){
      infoDate = "2019, 2020 & 2022"
    }else if(enteredYear === "2022"){
      infoDate = "2019, 2020 & 2021"
    }

    const onChangeYearHandler = (selectedYear) =>{
        setEnteredYear(selectedYear);
        
    }

    let expensesFiltered = props.data.filter( (item) => {
      return item.date.getFullYear() === new Date(enteredYear).getFullYear()
    } ) 
  
    return (
        <div>

        <div className="App container expenses">
  
            <div>
              <ExpensesFilter selected={enteredYear} onChangeYear={onChangeYearHandler} />
              <p className="text-white conform-padding">
                Data for years {infoDate} is hidden.
              </p>
            </div>
            
            <ExpensesList expenses={expensesFiltered} />

            {/* metodo con espressione ternaria 

              {expensesFiltered.length === 0 ? <p>No expenses found.</p> : (
                  expensesFiltered.map((item) => {
                  return(   
                    <Expense
                          key={item.id}//Strettamente necessario per migliorare le prestazioni e non riscontrare bug nel rendering di un array, si potrebbe utilizzare l'index dell'array.map , ma non essendo strettamente collegato all'item dell'array che vogliamo vedere in pagina , può causare bug.
                          title={item.title}
                          amount={item.amount}
                          date={item.date}
                          />
                          )
                  } )
              )}
              */}

            {/* metodo con JS shortcut
            
              {expensesFiltered.length === 0 && <p className="conform-padding text-white">No expenses found.</p>}
              {expensesFiltered.length > 0 && (
                expensesFiltered.map((item) => {
                  return(   
                    <Expense
                          key={item.id}//Strettamente necessario per migliorare le prestazioni e non riscontrare bug nel rendering di un array, si potrebbe utilizzare l'index dell'array.map , ma non essendo strettamente collegato all'item dell'array che vogliamo vedere in pagina , può causare bug.
                          title={item.title}
                          amount={item.amount}
                          date={item.date}
                          />
                          )
                  }) 
                )                

              }
            */}
        </div>
      </div>  
    )
}

export default Expenses;