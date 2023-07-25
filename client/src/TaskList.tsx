import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { Task } from "./Task";

interface TaskListProps {
  tasks: Task[];
  onTaskCompleted: (_id: string) => void;
  onTaskDelete: (_id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskCompleted,
  onTaskDelete,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task._id}>
          <ListItemText primary={task.taskName} secondary={task.description} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="mark completed"
              onClick={() => onTaskCompleted(task._id!)}
              disabled={task.isCompleted}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onTaskDelete(task._id!)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
