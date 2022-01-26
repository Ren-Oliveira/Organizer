import TaskItem from "./TaskItem";
import { Grid, List } from "@mui/material";

const TaskList = (props) => {
  const activeList = props.tasks.map((el) => {
    if (!el.isArchived)
      return (
        <TaskItem
          key={el.taskID}
          taskID={el.taskID}
          taskText={el.taskText}
          taskSetDate={el.taskSetDate}
          taskStartDate={el.taskStartDate}
          taskCompletedDate={el.taskCompletedDate}
          taskDueDate={el.taskDueDate}
          isStarted={el.isStarted}
          isCompleted={el.isCompleted}
          archiveTask={props.onArchiveTask}
          completeTask={props.onCompleteTask}
          startTask={props.onStartTask}
        />
      );
  });

  return (
    <Grid container columns={1} justifyContent="center">
      <List style={{ width: "70vw" }}>{activeList}</List>
    </Grid>
  );
};

export default TaskList;
