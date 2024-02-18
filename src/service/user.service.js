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
//create method that receives req.query
async function findUserByName(query) {
  const { first_name, last_name } = query;
  if (first_name) {
    const userByFirstName = await userService.findUserByFirstName(first_name);
    return userByFirstName.map((user) => new User(user));
  } else if (last_name) {
    const userByLastName = await userService.findUserByLastName(last_name);
    return userByLastName.map((user) => new User(user));
  } else if (first_name && last_name) {
    // const users = await userService.findByBothNames();
    // return users.map((user) => new User(user));
  }
}
//TODO:create function that finds by first and last name

async function findUserByFirstName(name) {
  const userByFirstName = await userRepository.findUserByFirstName(name);
  return userByFirstName.map((user) => new User(user));
}

async function findUserByLastName(name) {
  const userByLastName = await userRepository.findUserByLastName(name);
  return userByLastName.map((user) => new User(user));
}

async function createUser(user) {
  const createdUser = await userRepository.createUser(new User(user));
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
  findUserByName,
};
