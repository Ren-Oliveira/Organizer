import { useEffect, useState, useRef } from "react";
import { TextField, Typography, Grid } from "@mui/material";
import uniqid from "uniqid";
import FormLayout from "../UI/FormLayout";
import AddButton from "../UI/AddButton";

const TaskForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [hasError, setHasError] = useState(false);

  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, [hasError]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    setHasError(false);
  };

  const inputDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHander = (e) => {
    e.preventDefault();

    if (!inputText || /^\s*$/.test(inputText)) return setHasError(true);

    const newTask = {
      taskID: uniqid(),
      taskText: inputText,

      taskSetDate: new Date().toISOString().split("T")[0],
      taskStartDate: null,
      taskCompletedDate: null,
      taskDueDate: inputDate,

      isStarted: false,
      isArchived: false,
      isCompleted: false,
      isLate: false,
    };

    props.onAddNewTask(newTask);
    setInputText("");
    setInputDate("");
    setHasError(false);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") return submitHander(e);
  };

  return (
    <FormLayout>
      <Grid item xs={5}>
        <TextField
          style={{
            backgroundColor: "#192333",
            color: `${hasError ? "#FF6666" : "white"}`,
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
              {!hasError && "Add a new task:"}
              {hasError && "This field can't be empty:"}
            </Typography>
          }
          error={hasError}
          color={!hasError ? "secondary" : "error"}
          value={inputText}
          onChange={inputTextHandler}
          inputRef={textRef}
          onKeyPress={keyPressHandler}
          type="text"
          margin="none"
          variant="filled"
          autoComplete="off"
          aria-label="Add new task text"
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          style={{ width: "100%", backgroundColor: "#303540" }}
          inputProps={{
            min: `${new Date().toISOString().split("T")[0]}`,
            max: "2030-12-31",
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
          margin="none"
          variant="filled"
          aria-label="Select a due date"
        />
      </Grid>

      <Grid item xs={1}>
        <AddButton
          aria="Add a new task"
          hasError={hasError}
          onClick={submitHander}
        />
      </Grid>
    </FormLayout>
  );
};

export default TaskForm;
