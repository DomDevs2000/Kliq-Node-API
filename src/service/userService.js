import userRepository from "../database/userRepository.js";
import { User } from "../models/userModel.js";

async function getAllUsers() {
  const users = await userRepository.getAllUsers();
  return users.map((user) => new User(user));
}

async function findUserById(id) {
  const userById = await userRepository.findUserById(id);
  return userById.map((user) => new User(user));
}

async function findUserByName(query) {
  const { first_name, last_name } = query;
  if (first_name && !last_name) {
    const userByFirstName = await findUserByFirstName(first_name);
    return userByFirstName;
  } else if (last_name && !first_name) {
    const userByLastName = await findUserByLastName(last_name);
    return userByLastName;
  } else if (first_name && last_name) {
    const users = await findUserByBothNames(first_name, last_name);
    return users;
  }
}

async function findUserByBothNames(first_name, last_name) {
  const userByBothNames = await userRepository.findUserByBothNames(
    first_name,
    last_name,
  );
  return userByBothNames.map((user) => new User(user));
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
  const createdUser = await userRepository.createUser(new User(user));
  return createdUser;
}

async function deleteUser(id) {
  const deletedUser = await userRepository.deleteUser(id);
  return deletedUser;
}

async function updateUser(id, user) {
  const updatedUser = await userRepository.updateUser(id, new User(user));
  return updatedUser;
}
export default {
  getAllUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
  findUserByName,
};
