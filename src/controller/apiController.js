import express from "express";
import userService from "../service/user.service.js";

const router = express.Router();

/*
GET
*/
router.get("/users", async (_req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

router.get("/users/id/:id", async (req, res) => {
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

router.get("/users", async (req, res) => {
  try {
    let { first_name } = req.query.first_name;
    const userByFirstName = await userService.findUserByFirstName(first_name);
    res.status(200).json(userByFirstName);
  } catch (error) {
    res.send(404).send({ message: "No User Found" });
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

router.post("/users", async (req, res) => {
  try {
    const user = req.body;
    if (!user.first_name || !user.last_name || !user.email || !user.password) {
      return res.status(400).send({ message: "Missing Required Information" });
    }
    const createdUser = await userService.createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).send({ message: "User Not Created" });
    console.log(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUserId = req.params.id;
    if (!deletedUserId) {
      res.status(400).send({ message: "Missing Required Information" });
    }
    await userService.deleteUser(deletedUserId);
    res
      .status(200)
      .send({ message: "User with id " + deletedUserId + " deleted" });
  } catch (error) {
    res.status(400).send({ message: "User Not Deleted" });
    console.log(error);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = req.body;
    const userId = req.params.id;
    if (!userId || !updatedUser) {
      res.status(400).send({ message: "Missing Required Information" });
    }
    await userService.updateUser(userId, updatedUser);
    res.status(200).json({ message: "User with id " + userId + " updated" });
  } catch (error) {
    res.status(400).send({ message: "User Not Updated" });
    console.log(error);
  }
  //TODO: fields return null
});

export { router };
