import { useEffect, useState, useRef } from "react";
import FormLayout from "../UI/FormLayout";
import AddButton from "../UI/AddButton";
import { TextField, Grid, Typography, MenuItem, Divider } from "@mui/material";
import uniqid from "uniqid";
import { Categories } from "./ExpensesCategories";
import classes from "./ExpensesForm.module.css";

const today = new Date().toISOString().split("T")[0];

const ExpensesForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDate, setInputDate] = useState(today);
  const [isCatTouched, setIsCatTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const nameRef = useRef();
  const valueRef = useRef();
  const catRef = useRef();

  useEffect(() => {
    valueRef.current.focus();
  }, [hasError]);

  const inputValueHandler = (e) => {
    if (e.target.value.match(/\d+$/) || e.target.value === "")
      setInputValue(e.target.value);
  };

  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  };

  const inputCategoryHandler = (e) => {
    setIsCatTouched(true);
    setInputCategory(e.target.value);
  };

  const inputDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHander = (e) => {
    e.preventDefault();

    if (!inputValue) return setHasError(true);

    const newExpense = {
      exID: uniqid(),
      exName: inputName,
      exValue: inputValue,
      exCategory: !isCatTouched ? "None" : inputCategory,
      exDate: inputDate,
    };

    props.onAddExpense(newExpense);
    setIsCatTouched(false);
    setHasError(false);
    setInputName("");
    setInputValue("");
    setInputCategory("");
    setInputDate(today);
  };

  const valueKeyPressHandler = (e) => {
    if (e.key === "Enter") nameRef.current.focus();
  };

  const nameKeyPressHandler = (e) => {
    if (e.key === "Enter") catRef.current.focus();
  };

  return (
    <FormLayout>
      <Grid item xs={1.2}>
        <TextField
          onKeyPress={valueKeyPressHandler}
          autoComplete="off"
          style={{ width: "100%", backgroundColor: "#303540" }}
          inputProps={{
            style: { color: "white", fontWeight: "bold", letterSpacing: "1px" },
          }}
          label={
            <Typography
              variant="h6"
              fontWeight="bold"
              style={{ color: `${hasError ? "#FF6666" : "wheat"}` }}
            >
              Value:
            </Typography>
          }
          error={hasError}
          color={!hasError ? "secondary" : "error"}
          value={inputValue}
          onChange={inputValueHandler}
          inputRef={valueRef}
          step="1"
          variant="filled"
          aria-label="Add a new expense"
        />
      </Grid>

      <Divider orientation="vertical" />

      <Grid item xs={3}>
        <TextField
          onKeyPress={nameKeyPressHandler}
          style={{
            backgroundColor: "#303540",
            width: "100%",
          }}
          inputProps={{
            style: {
              color: "white",
              fontWeight: "600",
              letterSpacing: "2px",
            },
          }}
          label={
            <Typography
              variant="h6"
              fontWeight="bold"
              style={{ color: `${hasError ? "#FF6666" : "wheat"}` }}
            >
              Title:
            </Typography>
          }
          error={hasError}
          color={!hasError ? "secondary" : "error"}
          value={inputName}
          onChange={inputNameHandler}
          inputRef={nameRef}
          type="text"
          variant="filled"
          autoComplete="off"
          aria-label="Add a new expense"
        />
      </Grid>

      <Divider orientation="vertical" />

      <Grid item xs={1.3}>
        <TextField
          select
          inputRef={catRef}
          style={{
            width: "100%",
            backgroundColor: "#303540",
          }}
          label={
            <Typography
              variant="h6"
              fontWeight={"bold"}
              style={{ color: "wheat" }}
            >
              Category:
            </Typography>
          }
          color="secondary"
          value={inputCategory}
          onChange={inputCategoryHandler}
          variant="filled"
          aria-label="Select an expense category"
        >
          {Categories.map((cat) => {
            return (
              <MenuItem
                focusVisibleClassName={classes.focus}
                className={classes.menuItem}
                value={cat.name}
                key={cat.id}
              >
                {cat.name}
              </MenuItem>
            );
          })}
        </TextField>
      </Grid>

      <Divider orientation="vertical" />

      <Grid item xs={2}>
        <TextField
          style={{ width: "100%", backgroundColor: "#303540" }}
          inputProps={{
            style: { color: "white", fontWeight: "bold", letterSpacing: "1px" },
          }}
          InputLabelProps={{
            style: { color: "wheat", fontWeight: "bold" },
            shrink: true,
          }}
          value={inputDate}
          onChange={inputDateHandler}
          label="* Optional"
          type="date"
          color="secondary"
          variant="filled"
          aria-label="Select a due date"
        />
      </Grid>

      <Divider orientation="vertical" />

      <Grid item xs={1}>
        <AddButton
          aria="Add a new expense"
          hasError={hasError}
          onClick={submitHander}
        />
      </Grid>
    </FormLayout>
  );
};

export default ExpensesForm;
