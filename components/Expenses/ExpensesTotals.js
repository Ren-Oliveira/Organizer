import { ListItemText, Typography, Grid } from "@mui/material/";
import classes from "./ExpensesItem.module.css";

const ExpensesTotals = ({ expenses }) => {
  const curDay = new Date().toISOString().split("T")[0];
  const curMonth = curDay.split("-")[1];
  const curYear = curDay.split("-")[0];

  let todayArr = [];
  let monthArr = [];
  let yearArr = [];

  expenses.filter((el) => {
    if (el.exDate === curDay) todayArr.push(el);
    if (el.exDate.split("-")[0] === curYear) {
      yearArr.push(el);
      if (el.exDate.split("-")[1] === curMonth) monthArr.push(el);
    }
  });

  const TotalToday = todayArr.reduce((acc, cur) => +acc + +cur.exValue, 0);
  const TotalMonth = monthArr.reduce((acc, cur) => +acc + +cur.exValue, 0);
  const TotalYear = yearArr.reduce((acc, cur) => +acc + +cur.exValue, 0);
  const TotalSpendings = expenses.reduce((acc, cur) => +acc + +cur.exValue, 0);

  const Total = [
    {
      id: 1,
      name: "Today",
      value: TotalToday,
    },
    {
      id: 2,
      name: "This Month",
      value: TotalMonth,
    },
    {
      id: 3,
      name: "This Year",
      value: TotalYear,
    },
    {
      id: 4,
      name: "Overall",
      value: TotalSpendings,
    },
  ];

  return (
    <div className={`${classes.row}`}>
      <Grid container spacing={5} style={{ paddingLeft: "1ch" }}>
        <Grid item alignSelf={"center"} xs={1}>
          <Typography variant="h6" color="wheat">
            Total:
          </Typography>
        </Grid>

        {Total.map((el) => (
          <Grid item key={el.id} xs={2.5}>
            <ListItemText
              style={{ color: "white", textAlign: "center" }}
              primary={<Typography variant="body2">{el.name}</Typography>}
              secondary={<Typography variant="body1">{el.value}€</Typography>}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ExpensesTotals;
