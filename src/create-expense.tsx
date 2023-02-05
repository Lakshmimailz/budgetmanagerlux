import { BudgetManagerState, Expense, ExpenseReducer } from "./expense-reducer";
import {useReducer} from 'react';
import {UnpaidExpenseList} from './unpaid-expense-list';
import {PaidExpenseList} from './paid-expense-list'

const initialExpenseState :BudgetManagerState ={
    nameInput: "",
    costInput: 0,
    isEssentialInput: false,

    unpaidExpenses: [],
    paidExpenses: [],
    deleteunpaidExpenses: [],
    deletepaidExpenses: [],
    totalCost: 0,
    budget: 0,
    budgettext: ""
}

 export default function CreateExpense(){
    const [expenseState,dispatch] = useReducer(ExpenseReducer,initialExpenseState);
    const hStyle = { color: 'red' }
    return<>
    <h1>BUDGET</h1>

    <label htmlFor="name">Expense Name</label>
    <input id ="name" type="text" placeholder="" onChange={e=>dispatch({type:"SET_EXPENSE_NAME",payload:e.target.value})}/>

     <label htmlFor="cost">COST OF EXPENSE</label>
     <input id ="cost" type="number" placeholder="" onChange={e=>dispatch({type:"SET_COST",payload:Number(e.target.value)})}/>

     <label htmlFor="isEssential">Essential or Not</label>
     <input id ="isEssential" type="boolean"  placeholder="" onChange={()=>dispatch({type:"SET_ISESSENTIAL",payload:Boolean(false)})}/>

     <button onClick={()=>dispatch({type:"ADD_EXPENSE",payload:2})}>ADD EXPENSE</button>
       
          
     <button onClick={()=>dispatch({type:"PAID_EXPENSE",payload:4})}>PAID EXPENSE</button>     


      <h3>UNPAID EXPENSE LIST</h3>
     <UnpaidExpenseList unpaidExpenses={expenseState.unpaidExpenses} dispatch={dispatch}/>
     <button onClick={()=>dispatch({type:"DELETE_UNPAIDEXPENSE",payload:expenseState.deleteunpaidExpenses})}>Delete UnpaidExpense</button>
    
     <h3>PAID EXPENSE LIST</h3>
     <PaidExpenseList paidExpenses={expenseState.paidExpenses}  dispatch={dispatch}/> 
     <button onClick={()=>dispatch({type:"DELETE_PAIDEXPENSE", payload: expenseState.deletepaidExpenses})}>Delete PaidExpense</button>

      <h3>Total Cost :${expenseState.totalCost} -- <b style={hStyle } >{expenseState.budgettext}</b></h3>
      <label htmlFor="name">Budget Max:</label>
      <input id ="budget" type="text" placeholder="" onChange={e=>dispatch({type:"SET_BUDGET",payload:Number(e.target.value)})}/>
    </>

 }