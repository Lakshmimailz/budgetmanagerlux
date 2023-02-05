import { render, screen } from "@testing-library/react";
import { UnpaidExpenseList } from "../unpaid-expense-list";
import { Expense} from  "../expense-reducer";
/*
test("unpaid expense list",async ()=>{
    const unpaidExpenses: expense[]=[
        {name:"Laundry", cost:500, isEssential=false},
        {name:"Phone", cost:1000, isEssential=false}]
        render(<UnpaidExpenseList unpaidExpenses={expense}/>)
      const elementLaundry = await screen.findByText(/Laundry/);
      expect(elementLaundry.innerHTML).toBe("Laundry");
})
*/
