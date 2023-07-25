import { Request, Response } from "express";
import { TaskModel } from "../models/task";
import { TaskData } from "../interfaces";

// get all tasks controller
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).json({
      ok: true,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Sorry something was wrong, please contact with Admin",
    });
  }
};
export const createTask = async (req: Request, res: Response) => {
  const { taskName, description }: TaskData = req.body;
  const task = new TaskModel({
    taskName,
    description,
  });
  try {
    await task.save();
    return res.status(201).json({
      ok: true,
      msg: "task created successfuly",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Sorry something was wrong, please contact with Admin",
    });
  }
};
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { taskName, description, isCompleted }: TaskData = req.body;
  try {
    const task = await TaskModel.findByIdAndUpdate(
      id,
      { taskName, description, isCompleted },
      { new: true }
    );
    return res.status(201).json({
      ok: true,
      msg: "updated",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Sorry something was wrong, please contact with Admin",
    });
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await TaskModel.findByIdAndDelete(id);
    return res.status(201).json({
      ok: true,
      msg: "deleted successfuly",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Sorry something was wrong, please contact with Admin",
    });
  }
};
