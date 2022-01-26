import { useState } from "react";
import ExpensesForm from "../../components/Expenses/ExpensesForm";
import ExpensesList from "../../components/Expenses/ExpensesList";
import { Grid } from "@mui/material";
import ExpensesTotals from "../../components/Expenses/ExpensesTotals";
import ExpensesPieGraph from "../../components/Expenses/ExpensesPieGraph";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      exID: 1,
      exName: "hello",
      exValue: 432,
      exCategory: "Transport",
      exDate: "2011-5-11",
    },
  ]);

  const addExpenseHandler = (ex) => {
    let updateExpenses = [ex, ...expenses];
    setExpenses(updateExpenses);
  };

  const deleteHandler = (id) => {
    setExpenses((prev) => {
      const updatedExpenses = prev.filter((ex) => ex.exID !== id);
      return updatedExpenses;
    });
  };

  return (
    <div>
      <ExpensesForm onAddExpense={addExpenseHandler} />

      <Grid container>
        <Grid
          item
          justifyContent="center"
          style={{ marginLeft: "1rem", width: "45%" }}
        >
          <ExpensesList items={expenses} onDelete={deleteHandler} />
        </Grid>

        <Grid item style={{ width: "45%" }}>
          {expenses.length > 0 && <ExpensesTotals expenses={expenses} />}
          {expenses.length > 1 && <ExpensesPieGraph expenses={expenses} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Expenses;
