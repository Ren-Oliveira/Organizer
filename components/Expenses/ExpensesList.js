import ExpensesItem from "./ExpensesItem";
import { Grid, List } from "@mui/material";

const ExpensesList = (props) => {
  const exList = props.items.map((el) => {
    return (
      <ExpensesItem
        key={el.exID}
        exID={el.exID}
        exName={el.exName}
        exDate={el.exDate}
        exValue={el.exValue}
        exCategory={el.exCategory}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <Grid container columns={1} justifyContent="center">
      {exList.length > 0 && (
        <List style={{ margin: "0 3rem", width: "40vw" }}>{exList}</List>
      )}
      {exList.length <= 0 && (
        <h3 style={{ color: "lightgrey" }}> No expenses added yet ... </h3>
      )}
    </Grid>
  );
};

export default ExpensesList;
//
