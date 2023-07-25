import { Document } from "mongoose";
export interface TaskData extends Document {
  taskName: string;
  description?: string;
  dueDate?: Date;
  isCompleted: boolean;
}
