import { useState, useMemo } from "react";
import TaskStepper from "./UI/TaskStepper";
import {
  ListItemText,
  ListItemButton,
  Typography,
  Collapse,
} from "@mui/material/";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classes from "./TaskItem.module.css";
import TimeFrame from "../../helpers/TimeFrame";

const TaskItem = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const Message = useMemo(
    () => TimeFrame(props.taskSetDate, props.taskDueDate),
    []
  );

  return (
    <div
      className={`${classes.row} 
      ${props.isStarted ? classes.started : null}
      ${props.isCompleted ? classes.completed : null}`}
    >
      <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
        <ListItemText
          primary={
            <Typography variant="h6" className={classes.text}>
              {props.taskText}
            </Typography>
          }
          secondary={
            <Typography variant="subtitle2" className={classes.text}>
              {Message}
            </Typography>
          }
        />

        {isExpanded ? (
          <FaChevronUp className={classes.icon} />
        ) : (
          <FaChevronDown className={classes.icon} />
        )}
      </ListItemButton>
      <Collapse in={isExpanded} unmountOnExit>
        <TaskStepper task={props} />
      </Collapse>
    </div>
  );
};

export default TaskItem;
