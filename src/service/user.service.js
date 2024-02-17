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

async function findUserByLastName(name) {
  const userByLastName = await userRepository.findUserByLastName(name);
  return userByLastName.map((user) => new User(user));
}

async function createUser(user) {
  const createdUser = await userRepository.createUser(user);
  return createdUser;
}

async function deleteUser(id) {
  const deletedUser = await userRepository.deleteUser(id);
  return deletedUser;
}

async function updateUser(id, user) {
  const updatedUser = await userRepository.updateUser(id, user);
  return updatedUser;
}
export default {
  getAllUsers,
  findUserById,
  findUserByFirstName,
  findUserByLastName,
  createUser,
  deleteUser,
  updateUser,
};
