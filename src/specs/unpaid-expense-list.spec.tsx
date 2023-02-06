import { render, screen } from "@testing-library/react";
import { UnpaidExpenseList } from "../unpaid-expense-list";
import { Expense} from  "../expense-reducer";

test("unpaid expense list",async ()=>{
    const unpaidExpenses: Expense[]=[
        {name:"Laundry", cost:500, isEssential:false},
        {name:"Phone", cost:1000, isEssential:false}]

        // create a dummy dispatch variable
        let dispatch:any = null;

        render(<UnpaidExpenseList unpaidExpenses={unpaidExpenses} dispatch = {dispatch}/>)

      const elementLaundry = await screen.findByText(/Laundry/);
      expect(elementLaundry.innerHTML).toBe("Laundry");
})

