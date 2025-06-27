import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  deleteUser,
  getUsers,
  getUserWithId,
  updateUser,
} from "../Controllers/users.js";

const router = express.Router();

//All routes here are starting with /users
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserWithId);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
