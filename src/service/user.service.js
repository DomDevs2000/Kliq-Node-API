import userRepository from "../database/user.repository.js";
import { User } from "../models/user.model.js";

async function getAllUsers() {
  const users = await userRepository.getAllUsers();
  return users.map((user) => new User(user));
}

async function findUserById(id) {
  const userById = await userRepository.findUserById(id);
  return userById.map((user) => new User(user));
}

async function findUserByFirstName(name) {
  const userByFirstName = await userRepository.findUserByFirstName(name);
  return userByFirstName.map((user) => new User(user));
}
export default { getAllUsers, findUserById, findUserByFirstName };
