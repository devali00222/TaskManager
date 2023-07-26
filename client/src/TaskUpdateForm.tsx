// src/TaskForm.tsx
import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { Task } from "./Task";
import { Link, useParams } from "react-router-dom";
import { updateTask } from "./api/tasksService";

const TaskUpdateForm: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  let { _id } = useParams();

  const handleTaskUpdate = async () => {
    const newTask: Task = {
      taskName,
      description,
      dueDate: new Date(dueDate),
      isCompleted: false,
    };
    await updateTask(_id!, newTask);
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
        <Link to={`/`}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTaskUpdate}
          >
            Update
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default TaskUpdateForm;
