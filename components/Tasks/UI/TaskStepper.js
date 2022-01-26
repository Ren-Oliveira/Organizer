import { useState } from "react";
import { formatDate } from "../../../helpers/formatDate";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import {
  Button,
  Grid,
  Step,
  Stepper,
  StepLabel,
  Typography,
} from "@mui/material/";

const TaskStepper = (props) => {
  const [activeStep, setActiveStep] = useState(1);

  const startHandler = () => {
    props.task.startTask(props.task.taskID, new Date());
    if (!props.task.isCompleted) setActiveStep(2);
  };

  const completeHandler = () => {
    props.task.completeTask(props.task.taskID, new Date());
    return setActiveStep(4);
  };

  const archiveHandler = () => {
    props.task.archiveTask(props.task.taskID);
  };

  //////////////////////////////////////////
  ///// Edit "Next" Button using styled()
  ///////////////////////////////////////

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "#FFFF",
    padding: "10px 15px",
    fontWeight: "bold",
    letterSpacing: "1.2px",
    "&:hover": {
      backgroundColor: `${
        !props.task.isStarted & !props.task.isCompleted
          ? "yellowgreen"
          : props.task.isStarted & !props.task.isCompleted
          ? "forestgreen"
          : "crimson"
      }`,
    },
  }));

  //////////////////////////////////////////////////////////
  ///// Changing Stepper Icon Color using createTheme()
  ////////////////////////////////////////////////////////

  const outerTheme = createTheme({
    components: {
      MuiStepIcon: {
        styleOverrides: {
          root: {
            color: "#deadad",
            "& text": {
              fill: "transparent",
            },
            "&.Mui-active": {
              color: `${!props.task.isStarted ? "yellowgreen" : "forestGreen"}`,
            },
            "&.Mui-completed": {
              color: `${props.task.isStarted ? "yellowgreen" : "forestGreen"}`,
            },
          },
        },
      },
    },
  });

  ////////////////////////////////////////////////////////

  return (
    <ThemeProvider theme={outerTheme}>
      <Grid container sx={{ width: "100%" }} columns={2}>
        <Grid item sx={{ width: "85%" }}>
          <Stepper style={{ marginBottom: "1ch" }} activeStep={activeStep}>
            <Step completed>
              <StepLabel style={{ cursor: "default" }}>
                <Typography
                  color="white"
                  letterSpacing="0.5px"
                  textAlign="center"
                  variant="body2"
                >
                  ADDED
                  <br />
                  {formatDate(props.task.taskSetDate)}
                </Typography>
              </StepLabel>
            </Step>

            <Step onClick={startHandler}>
              <StepLabel style={{ cursor: "pointer" }} icon={"X"}>
                <Typography
                  color="white"
                  letterSpacing="0.5px"
                  textAlign="center"
                  variant="body2"
                >
                  {props.task.isStarted ? "STARTED" : "START"} <br />
                  {formatDate(props.task.taskStartDate)}
                </Typography>
              </StepLabel>
            </Step>

            <Step onClick={completeHandler}>
              <StepLabel style={{ cursor: "pointer" }} icon={"X"}>
                <Typography
                  color="white"
                  letterSpacing="0.5px"
                  textAlign="center"
                  variant="body2"
                >
                  {props.task.isCompleted ? "FINISHED" : "FINISH"} <br />
                  {formatDate(props.task.taskCompletedDate)}
                </Typography>
              </StepLabel>
            </Step>

            {props.task.taskDueDate && (
              <Step>
                <StepLabel style={{ cursor: "default" }} icon={"X"}>
                  <Typography
                    color="white"
                    letterSpacing="0.5px"
                    textAlign="center"
                    variant="body2"
                  >
                    DUE <br /> {formatDate(props.task.taskDueDate)}
                  </Typography>
                </StepLabel>
              </Step>
            )}
          </Stepper>
        </Grid>

        <Grid
          item
          sx={{ width: "15%", paddingLeft: "2ch" }}
          alignContent="right"
        >
          {!props.task.isStarted & !props.task.isCompleted ? (
            <CustomButton onClick={startHandler}>Start</CustomButton>
          ) : props.task.isStarted & !props.task.isCompleted ? (
            <CustomButton onClick={completeHandler}>Complete</CustomButton>
          ) : props.task.isCompleted ? (
            <CustomButton onClick={archiveHandler}> Archive </CustomButton>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TaskStepper;
