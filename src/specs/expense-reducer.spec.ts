import {ExpenseReducer,Expense, BudgetManagerState} from  "../expense-reducer";

test("SET EXPENSE NAME",()=>{
    const initialExpenseState :BudgetManagerState ={
        nameInput: "Laundry",
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
    const nextState =ExpenseReducer(initialExpenseState,
        {type:"SET_EXPENSE_NAME",payload:"Laundry"});
        expect(nextState.unpaidExpenses.length).toBe(0);
        expect(nextState.paidExpenses.length).toBe(0);
})
test("SET COST",()=>{
const initialExpenseState :BudgetManagerState ={
    nameInput: "Laundry",
    costInput: 500,
    isEssentialInput: false,    
    unpaidExpenses: [],
    paidExpenses: [],
    deleteunpaidExpenses: [],
    deletepaidExpenses: [],
    totalCost: 0,
    budget: 0,
    budgettext: ""
}
const nextState =ExpenseReducer(initialExpenseState,
    {type:"SET_COST",payload:500});
    expect(nextState.unpaidExpenses.length).toBe(0);
    expect(nextState.paidExpenses.length).toBe(0);
})
test("SET ISESSENTIAL",()=>{
    const initialExpenseState :BudgetManagerState ={
        nameInput: "Laundry",
        costInput: 500,
        isEssentialInput: false,    
        unpaidExpenses: [],
        paidExpenses: [],
        deleteunpaidExpenses: [],
        deletepaidExpenses: [],
        totalCost: 0, budget: 0,
        budgettext: ""
    }
    const nextState =ExpenseReducer(initialExpenseState,
        {type:"SET_ISESSENTIAL",payload:false});
        expect(nextState.unpaidExpenses.length).toBe(0);
        expect(nextState.paidExpenses.length).toBe(0);
    })
    test ("ADD EXPENSE",()=>{
        const initialExpenseState :BudgetManagerState ={
            nameInput: "Laundry",
            costInput: 500,
            isEssentialInput: false,    
            unpaidExpenses: [],
            paidExpenses: [],
            deleteunpaidExpenses: [],
            deletepaidExpenses: [],
            totalCost: 0, budget: 0,
            budgettext: ""
        }
        const nextState =ExpenseReducer(initialExpenseState,
            {type:"ADD_EXPENSE",payload:500});
            expect(nextState.unpaidExpenses).toStrictEqual([{"cost": 500, "isEssential": false, "name": "Laundry"}]);
                  
             console.log(nextState);})
            
        test ("PAID EXPENSE",()=>{
                const initialExpenseState :BudgetManagerState ={
                    nameInput: "Laundry",
                    costInput: 500,
                    isEssentialInput: false,    
                    unpaidExpenses: [],
                    paidExpenses: [],
                    deleteunpaidExpenses: [],
                    deletepaidExpenses: [],
                    totalCost: 0, budget: 0,
                    budgettext: ""
                }
                const nextState =ExpenseReducer(initialExpenseState,
                    {type:"PAID_EXPENSE",payload:500});
                    expect(nextState.paidExpenses).toStrictEqual([{"cost": 500, "isEssential": false, "name": "Laundry"}]);
                              
                     console.log(nextState);})
                    

      test ("CHECKED UNPAID EXPENSE",()=>{
        const initialExpenseState :BudgetManagerState ={
            nameInput: "Laundry",
            costInput: 0,
            isEssentialInput: false,    
            unpaidExpenses: [],
            paidExpenses: [],
            deleteunpaidExpenses: [],
            deletepaidExpenses: [],
            totalCost: 0, budget: 0,
            budgettext: ""
        }
        const nextState =ExpenseReducer(initialExpenseState,
            {type:"CHECKED_UNPAIDEXPENSE",payload:"Laundry"});
            expect(nextState.deleteunpaidExpenses).toStrictEqual(["Laundry"]);
        })

         test ("CHECKED PAID EXPENSE",()=>{
                const initialExpenseState :BudgetManagerState ={
                    nameInput: "Laundry",
                    costInput: 0,
                    isEssentialInput: false,    
                    unpaidExpenses: [],
                    paidExpenses: [],
                    deleteunpaidExpenses: [],
                    deletepaidExpenses: [],
                    totalCost: 0, budget: 0,
                    budgettext: ""
                }
                const nextState =ExpenseReducer(initialExpenseState,
                    {type:"CHECKED_PAIDEXPENSE",payload:"Laundry"});
                    expect(nextState.deletepaidExpenses).toStrictEqual(["Laundry"]);
                })

    test ("DELETE UNPAID EXPENSE",()=>{
        const initialExpense : Expense = {
            name: "Laundry",
            cost: 500,
            isEssential: false,    
        }

        const initialExpenseState :BudgetManagerState ={
          nameInput: "Laundry",
          costInput: 500,
          isEssentialInput: false,    
          unpaidExpenses: [initialExpense],
          paidExpenses: [],
          deleteunpaidExpenses: [],
          deletepaidExpenses: [],
          totalCost: 0, budget: 0,
          budgettext: ""
                      }
     const nextState =ExpenseReducer(initialExpenseState,
        {type:"DELETE_UNPAIDEXPENSE",payload:["Laundry"]});
        expect(nextState.unpaidExpenses).toStrictEqual([]);
         })           
        
    test ("DELETE PAID EXPENSE",()=>{
        const initialExpense : Expense = {
            name: "Laundry",
            cost: 500,
            isEssential: false,    
        }

        const initialExpenseState :BudgetManagerState ={
          nameInput: "Laundry",
          costInput: 500,
          isEssentialInput: false,    
          unpaidExpenses: [initialExpense],
          paidExpenses: [],
          deleteunpaidExpenses: [],
          deletepaidExpenses: [],
          totalCost: 0, budget: 0,
          budgettext: ""
                      }
   const nextState =ExpenseReducer(initialExpenseState,
      {type:"DELETE_PAIDEXPENSE", payload:["Laundry"]});
      expect(nextState.paidExpenses).toStrictEqual([]);
       console.log(nextState);
       })           
      