import { Grid } from "@mui/material";
import InputDateItem from "./InputDateItem";

const dayOptions = [];
for (let i = 1; i <= 31; i++) dayOptions.push(i);
const monthOptions = [];
for (let i = 1; i <= 12; i++) monthOptions.push(i);
const yearOptions = [2022, 2023, 2024, 2025];

export default function InputDateForm() {
  return (
    <>
      <Grid item xs={1}>
        <InputDateItem
          label="Day"
          ariaLabel="Select day"
          options={dayOptions}
        />
      </Grid>
      <Grid item xs={1}>
        <InputDateItem
          label="Month"
          ariaLabel="Select month"
          options={monthOptions}
        />
      </Grid>
      <Grid item xs={1}>
        <InputDateItem
          label="Year"
          ariaLabel="Select year"
          options={yearOptions}
        />
      </Grid>
    </>
  );
}
