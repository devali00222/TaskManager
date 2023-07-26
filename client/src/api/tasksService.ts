// tasksService.ts
import { Task } from "../Task";
import api from "./apiConfig";

export async function getAllTasks(): Promise<Task[]> {
  try {
    const response = await api.get("/api/tasks");
    return response.data.tasks;
  } catch (error) {
    // Handle error
    throw error;
  }
}
export async function createTask(newTask: Task): Promise<Task> {
  try {
    const response = await api.post<Task>("/api/tasks", newTask);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
}
export async function updateTask(
  taskId: string,
  updateData: {
    taskName?: string,
    description?: string
  }
): Promise<Task> {
  try {
    const response = await api.put<Task>(
      `/api/tasks/update/${taskId}`,
      updateData
    );
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
}
export async function completedTask(taskId: string): Promise<Task> {
  try {
    const response = await api.put<Task>(`/api/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
}
export async function deleteTask(taskId: string): Promise<void> {
  try {
    await api.delete(`/api/tasks/${taskId}`);
  } catch (error) {
    // Handle error
    throw error;
  }
}
