// src/TaskForm.tsx
import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { Task } from "./Task";

interface TaskFormProps {
  onTaskAdd: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTaskAdd = () => {
    const newTask: Task = {
      _id: Math.random().toString(36).substring(7),
      taskName,
      description,
      dueDate: new Date(dueDate),
      isCompleted: false,
    };

    onTaskAdd(newTask);
    setTaskName("");
    setDescription("");
    setDueDate("");
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
        <TextField
          label="Task Name"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          type="date"
          variant="outlined"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
          placeholder=""
        />
        <Button variant="contained" color="primary" onClick={handleTaskAdd}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
