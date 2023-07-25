export interface Task {
  _id?: string;
  taskName: string;
  description?: string;
  dueDate: Date;
  isCompleted: boolean;
}
