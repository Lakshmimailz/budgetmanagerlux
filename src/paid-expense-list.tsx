import  {Expense, CreateExpenseAction} from "./expense-reducer"
type paidexpenselistProps ={
      paidExpenses: Expense[]
      dispatch: React.Dispatch<CreateExpenseAction>
}
export function PaidExpenseList(props: paidexpenselistProps){
    return <ul>
        {props.paidExpenses.map(t=><li>
            <input  type="checkbox" id= {t.name} onClick={()=>props.dispatch({type:"CHECKED_PAIDEXPENSE",payload:t.name})}/>    
            {t.name} --- {t.cost}
        </li>)}
    </ul>
}