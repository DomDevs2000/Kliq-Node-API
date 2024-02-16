import userRepository from "../database/user.repository.js";

async function getAllUsers() {
  return await userRepository.getAllUsers();
}
export default { getAllUsers };
