import { userRepository } from "../server.js";

async function getAllUsers() {
  userRepository.getAllUsers();
}

export { getAllUsers };
