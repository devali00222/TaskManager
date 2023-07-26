import { Router, Request, Response } from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  completedTask,
  updateTask,
} from "../controllers";

const router = Router();
router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", completedTask);
router.put("/update/:id", updateTask);
router.delete("/:id", deleteTask);
export default router;
