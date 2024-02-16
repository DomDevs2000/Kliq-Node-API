import { userRepository } from "../server.js";

class UserService {
  async getAllUsers() {
    return userRepository.getAllUsers();
  }
}

export { UserService };
