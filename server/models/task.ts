import mongoose, { Schema, model } from "mongoose";
import { TaskData } from "../interfaces";
const Task = new Schema<TaskData>({
  taskName: {
    type: String,
    required: true,
  },
  description: String,
  dueDate: {
    type: Date,
    default: Date.now(),
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
export const TaskModel = model("Task", Task);
