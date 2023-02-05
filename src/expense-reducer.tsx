export type Expense ={
    name: string 
    cost: number
    isEssential: boolean
}
export type BudgetManagerState = {
    nameInput: string
    costInput: number
    isEssentialInput: boolean
    unpaidExpenses: Expense[]
    paidExpenses: Expense[]
    deleteunpaidExpenses: string[]
    deletepaidExpenses: string[]
    totalCost: number
    budget: number    
    budgettext: string
}
type setExpenseNameAction={type:"SET_EXPENSE_NAME",payload:string};
type setCostAction={type:"SET_COST",payload:number};
type isEssentialAction={type:"SET_ISESSENTIAL",payload:boolean};
type addExpenseAction={type:"ADD_EXPENSE",payload:number};

type paidExpenseAction ={type:"PAID_EXPENSE",payload:number};
type deleteUnPaidExpenseAction={type:"DELETE_UNPAIDEXPENSE",payload:string[]};
type deletePaidExpenseAction={type:"DELETE_PAIDEXPENSE",payload:string[]};
type checkedUnPaidExpenseAction={type:"CHECKED_UNPAIDEXPENSE",payload:string};
type checkedPaidExpenseAction={type:"CHECKED_PAIDEXPENSE",payload:string};
type setBudgetAction={type:"SET_BUDGET",payload:number};

export type CreateExpenseAction =  setExpenseNameAction |setCostAction |isEssentialAction |addExpenseAction | paidExpenseAction |deleteUnPaidExpenseAction |deletePaidExpenseAction | checkedUnPaidExpenseAction|checkedPaidExpenseAction | setBudgetAction;

export function ExpenseReducer(state:BudgetManagerState,action:CreateExpenseAction):BudgetManagerState{
    const newState:BudgetManagerState = JSON.parse(JSON.stringify(state));

   switch(action.type){
      case "SET_EXPENSE_NAME":{
         newState.nameInput=action.payload;
         return newState;
      }
      case "SET_COST":{
         newState.costInput=action.payload;
         return newState;
      }
      case "SET_ISESSENTIAL":{
         //const expense: Expense={name:newState.nameInput,cost:newState.costInput,isEssential:newState.isEssentialInput,id:Math.random()};
        
         newState.isEssentialInput=action.payload;        
        
         return newState;
      }
      case "SET_BUDGET":{
        
         newState.budget=action.payload;        
        
         return newState;
      }
     case "ADD_EXPENSE":{
        const expense: Expense={name:newState.nameInput,cost:newState.costInput,isEssential:newState.isEssentialInput};
        
            newState.unpaidExpenses.push(expense);
            newState.totalCost= newState.totalCost + expense.cost;
            if(newState.totalCost > newState.budget){
               newState.budgettext = "Exceed the budget"
            } 
            return newState;
               }
       case "PAID_EXPENSE":{
                  const expense: Expense={name:newState.nameInput,cost:newState.costInput,isEssential:newState.isEssentialInput};
                     newState.paidExpenses.push(expense);
                  newState.totalCost= newState.totalCost + expense.cost;
                  if(newState.totalCost > newState.budget){
                     newState.budgettext = "Exceed the budget"
                  } 
                  return newState;        
                 }
     
     case "CHECKED_UNPAIDEXPENSE":{
       newState.deleteunpaidExpenses.push(action.payload);
       return newState;
     }
     case "CHECKED_PAIDEXPENSE":{
      console.log(action.payload);
      newState.deletepaidExpenses.push(action.payload);
       return newState;
     }
    
     case "DELETE_UNPAIDEXPENSE":{
      const expense: Expense={name:newState.nameInput,cost:newState.costInput,isEssential:newState.isEssentialInput};
      let i=0;
      console.log(action.payload);
      let temp = [];
      for(const expense of newState.unpaidExpenses){
         for(const checkedBox of action.payload){
         if (checkedBox === expense.name){        
           console.log(checkedBox);
         newState.totalCost= newState.totalCost - expense.cost;
         if(newState.totalCost < newState.budget){
            newState.budgettext = ""
         } 
      } else{
         temp.push(expense);
      }
         
      }
         i++;
      }
      newState.deleteunpaidExpenses.pop();
      newState.unpaidExpenses = temp;
      return newState; 
          }   

     case "DELETE_PAIDEXPENSE":{
      const expense: Expense={name:newState.nameInput,cost:newState.costInput,isEssential:newState.isEssentialInput};
      let i=0;
      console.log(action.payload);
      let temp = [];
      for(const expense of newState.paidExpenses){
         for(const checkedBox of action.payload){
         if (checkedBox === expense.name){        
         newState.totalCost= newState.totalCost - expense.cost;
         if(newState.totalCost < newState.budget){
            newState.budgettext = ""
         } 
      } else{
         temp.push(expense);
      }
         
      }
         i++;
      }
      newState.deletepaidExpenses.pop();
      newState.paidExpenses = temp;
      return newState;
     }      
     }
   }




