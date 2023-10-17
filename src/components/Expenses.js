import React, { useState } from "react";
import Expense from "./Expense";
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
  
 



    // console.log(expensesFiltered)
    return (
        <div>

        <div className="App container expenses">
  
            <div>
              <ExpensesFilter selected={enteredYear} onChangeYear={onChangeYearHandler} />
              <p className="text-white conform-padding">
                Data for years {infoDate} is hidden.
              </p>
            </div>

              {expensesFiltered.map((item) => {
                return(
                      <Expense
                      key={item.id}//Strettamente necessario per migliorare le prestazioni e non riscontrare bug nel rendering di un array, si potrebbe utilizzare l'index dell'array.map , ma non essendo strettamente collegato all'item dell'array che vogliamo vedere in pagina , può causare bug.
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                      />
                      )
              } )}
  
  
        </div>
      </div>  
    )
}

export default Expenses;