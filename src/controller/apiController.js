import express from "express";
import userService from "../service/userService.js";
import { validationResult } from "express-validator";
import { validateFirstName } from "../validation/firstNameQueryValidation.js";
import { validateLastName } from "../validation/lastNameQueryValidation.js";
import { validateUpdateUser } from "../validation/updateUserValidation.js";
import { validateCreateUser } from "../validation/createUserValidation.js";

const router = express.Router();
/*
GET
*/
router.get("/users", validateFirstName, validateLastName, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else if (Object.keys(req.query).length) {
      const users = await userService.findUserByName(req.query);
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const userId = req.params.id;
      const userById = await userService.findUserById(userId);
      res.status(200).json(userById);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});
/*
 POST
*/
router.post("/users", validateCreateUser, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const user = req.body;
      await userService.createUser(user);
      res.status(200).json({ message: "User Created" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
 DELETE
 */
router.delete("/users/:id", async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const deletedUserId = req.params.id;
      await userService.deleteUser(deletedUserId);
      res
        .status(200)
        .send({ message: "User with id " + deletedUserId + " deleted" });
    }
  } catch (error) {
    res.status(400).send({ message: "User Not Deleted" });
    console.log(error);
  }
});

/*
 UPDATE
*/
router.put("/users/:id", validateUpdateUser, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const updatedUser = req.body;
      const userId = req.params.id;

      await userService.updateUser(userId, updatedUser);
      res.status(200).json({ message: "User with id " + userId + " updated" });
    }
  } catch (error) {
    res.status(400).send({ message: "User Not Updated" });
    console.log(error);
  }
});

export { router };
