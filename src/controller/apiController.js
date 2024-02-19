import express from "express";
import userService from "../service/user.service.js";

const router = express.Router();

/*
GET
*/
router.get("/users", async (req, res) => {
  try {
    if (Object.keys(req.query).length) {
      // const users = await userService.findUserByName(req.query);
      const first_name = req.query.first_name;
      const users = await userService.findUserByFirstName(first_name);
      res.status(200).json(users);
    } else {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userById = await userService.findUserById(userId);
    res.status(200).json(userById);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});
/*
 POST
*/
router.post("/users", async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    console.log(req.body);
    const createdUser = await userService.createUser(user);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).send({ message: "User Not Created" });
    console.log(error);
  }
});

/*
 DELETE
 */
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

/*
 UPDATE
*/
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
});

export { router };
