import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Grid } from "@mui/material/";
import { Categories } from "./ExpensesCategories";
import classes from "./ExpensesItem.module.css";

const ExpensesPieGraph = ({ expenses }) => {
  const totalByCat = [];
  Categories.map((cat) => totalByCat.push({ name: cat.name, value: 0 }));
  for (let ex of expenses) {
    for (let cat of totalByCat)
      if (ex.exCategory === cat.name) {
        cat.value += +ex.exValue;
      }
  }

  const LabelFilter = totalByCat.filter((item) => item.value > 0);
  const LabelName = LabelFilter.map((cat) => cat.name);
  const LabelValue = LabelFilter.map((cat) => cat.value);

  return (
    <div className={`${classes.row}`}>
      <Grid container spacing={6}>
        {LabelName.length > 0 && (
          <Line
            style={{ margin: "3rem 6rem 1rem" }}
            options={{
              maintainAspectRatio: true,
              gridLines: {
                display: false,
              },
              scale: {
                ticks: {
                  maxTicksLimit: 7,
                },
              },
              scales: {
                y: {
                  ticks: {
                    callback: function (value) {
                      if (Math.floor(value) === value) {
                        return value + " €";
                      }
                    },
                    color: "white",
                    beginAtZero: true,
                  },
                },
                x: { ticks: { color: "white" } },
              },
            }}
            data={{
              labels: LabelName,
              datasets: [
                {
                  label: "Expenses Overall",
                  data: LabelValue,
                  backgroundColor: "grey",
                  borderColor: "darkgrey",
                  borderWidth: 2,
                },
              ],
            }}
          />
        )}
      </Grid>
    </div>
  );
};

export default ExpensesPieGraph;
