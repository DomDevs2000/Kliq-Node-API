import express from "express";
const router = express.Router();
import { UserService } from "../service/user.service.js";
const userService = new UserService();
router.get("/users", async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users); //TODO: console log retursn results but using userService doesnt return results here
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

export { router };
