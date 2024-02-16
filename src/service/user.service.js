import userRepository from "../database/user.repository.js";
import { User } from "../models/user.model.js";

async function getAllUsers() {
  const users = await userRepository.getAllUsers();
  return users.map((user) => new User(user));
}

async function findUserById(id) {
  const userbyId = await userRepository.findUserById(id);
  return userbyId.map((user) => new User(user));
}
export default { getAllUsers, findUserById };
