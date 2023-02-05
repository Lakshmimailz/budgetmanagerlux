import  {Expense, CreateExpenseAction} from "./expense-reducer"


type UnpaidexpenselistProps ={
    
    unpaidExpenses: Expense[]
    dispatch: React.Dispatch<CreateExpenseAction>
}

export function UnpaidExpenseList(props:UnpaidexpenselistProps ){
    return <ul>    
    {props.unpaidExpenses.map(t=><li><input  type="checkbox" id= {t.name} onClick={()=>props.dispatch({type:"CHECKED_UNPAIDEXPENSE",payload:t.name})}/>
        {t.name}---
        {t.cost}</li>)}
    </ul>
}