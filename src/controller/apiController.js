import express from "express";
import userService from "../service/user.service.js";

const router = express.Router();

router.get("/users", async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users); //TODO: console log retursn results but using userService doesnt return results here
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

router.get("/users/name/:first_name", async (req, res) => {
  try {
    const userByName = await userService.findUserByFirstName(
      req.params.first_name,
    );
    res.status(200).json(userByName);
  } catch (error) {
    console.log(error);
  }
});

export { router };
