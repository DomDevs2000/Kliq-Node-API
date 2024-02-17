import express from "express";
import userService from "../service/user.service.js";

const router = express.Router();

router.get("/users", async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const userById = await userService.findUserById(req.params.id);
    res.status(200).json(userById);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

router.get("/users/firstname/:first_name", async (req, res) => {
  try {
    const userByFirstName = await userService.findUserByFirstName(
      req.params.first_name,
    );
    res.status(200).json(userByFirstName);
  } catch (error) {
    console.log(error);
  }
});

router.get("/users/lastname/:last_name", async (req, res) => {
  try {
    const userByLastName = await userService.findUserByLastName(
      req.params.last_name,
    );
    res.status(200).json(userByLastName);
  } catch (error) {
    console.log(error);
  }
});

export { router };
