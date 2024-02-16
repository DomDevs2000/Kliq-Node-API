import userRepository from "../database/user.repository.js";

class UserService {
  async getAllUsers() {
    return await userRepository.getAllUsers();
  }
}

export { UserService };
