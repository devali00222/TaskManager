import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Task } from "./Task";
import {
  completedTask,
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./api/tasksService";
const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [fake, setFake] = useState<number>(0);

  useEffect(() => {
    getAllTasks().then((data) => {
      setTasks([...data]);
    });
  }, [fake]);

  const handleTaskAdd = (task: Task) => {
    createTask(task);
    setFake(fake + 1);
  };

  const handleTaskCompleted = async (taskId: string) => {
    completedTask(taskId);
    setFake(fake + 1);
  };

  const handleTaskDelete = async (taskId: string) => {
    await deleteTask(taskId);
    setFake(fake + 1);
  };
  const handleTaskUpdate = async (taskId: string) => {
    await updateTask(taskId, {});
    setFake(fake + 1);
  };
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Typography variant="h4">Task Manager</Typography>
        <TaskForm onTaskAdd={handleTaskAdd} />
      </Box>
      <TaskList
        tasks={tasks}
        onTaskCompleted={handleTaskCompleted}
        onTaskDelete={handleTaskDelete}
      />
    </Container>
  );
};

export default HomePage;
