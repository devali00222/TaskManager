import { Router, Request, Response } from "express";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers";

const router = Router();
router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
export default router;
