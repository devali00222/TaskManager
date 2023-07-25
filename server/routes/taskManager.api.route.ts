import { Router, Request, Response } from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  completedTask,
} from "../controllers";

const router = Router();
router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", completedTask);
router.delete("/:id", deleteTask);
export default router;
