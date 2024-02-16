import { UserRepository } from "../database/user.repository.js";
import { userRepository } from "../server.js";

async function getAllUsers() {
  userRepository.getAllUsers();
}

export { getAllUsers };
