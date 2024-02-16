import userRepository from "../database/user.repository.js";
import { User } from "../models/user.model.js";

async function getAllUsers() {
  const users = await userRepository.getAllUsers();
  return users.map((user) => new User(user));
}
export default { getAllUsers };
