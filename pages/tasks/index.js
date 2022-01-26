import { useState } from "react";
import TaskForm from "../../components/Tasks/TaskForm";
import TaskList from "../../components/Tasks/TaskList";
import { Grid } from "@mui/material";
import Head from "next/head";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      taskID: 1,
      taskText: "Add the first task!",

      taskSetDate: "2021-12-11",
      taskDueDate: null,
      taskStartDate: null,
      taskCompletedDate: null,

      isStarted: false,
      isCompleted: false,
      isArchived: false,
      isLate: false,
    },
    {
      taskID: 2,
      taskText: "Finish this project!",

      taskSetDate: "2021-12-13",
      taskDueDate: "2021-12-15",
      taskStartDate: null,
      taskCompletedDate: null,

      isStarted: false,
      isCompleted: false,
      isArchived: false,
    },
  ]);

  const addNewTaskHandler = (task) => {
    if (!task.taskText) return;
    let updateTasks = [task, ...tasks];
    setTasks(updateTasks);
  };

  // const deleteTaskHandler = (id) => {
  //   let updateTasks = [...archivedTasks].filter((task) => task.taskID !== id);
  //   setArchivedTasks(updateTasks);};

  const startTaskHandler = (id, date) => {
    let dateStr = date.toISOString().split("T")[0];

    let updateTasks = tasks.map((task) => {
      if (task.taskID !== id) return task;
      if (task.taskID === id)
        if (task.isStarted || task.isCompleted) return task;
      return { ...task, isStarted: true, taskStartDate: dateStr };
    });
    setTasks(updateTasks);
  };

  const completeTaskHandler = (id, date) => {
    let dateStr = date.toISOString().split("T")[0];
    let updateTasks = tasks.map((task) => {
      if (task.taskID !== id) return task;
      if (task.taskID === id) if (task.isCompleted) return task;
      return {
        ...task,
        isCompleted: true,
        isStarted: false,
        isLate: false,
        taskCompletedDate: dateStr,
        taskStartDate: dateStr,
      };
    });
    setTasks(updateTasks);
  };

  const archiveTaskHandler = (id) => {
    let updateTasks = tasks.map((task) => {
      if (task.taskID !== id) return task;
      if (task.taskID === id)
        return {
          ...task,
          isArchived: true,
        };
    });
    setTasks(updateTasks);
  };

  return (
    <>
      <Head>
        <title>My tasks</title>
        <meta
          name="description"
          content="An app that helps you manage your tasks, expenses and goals. Do you need a place to write down your to-dos? You found it!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TaskForm onAddNewTask={addNewTaskHandler} />

      <Grid container justifyContent="center" style={{ width: "100%" }}>
        <TaskList
          tasks={tasks}
          onArchiveTask={archiveTaskHandler}
          onCompleteTask={completeTaskHandler}
          onStartTask={startTaskHandler}
        />
      </Grid>
    </>
  );
};

export default Task;
