import { connection } from "./database/db.js";
import { UserRepository } from "./database/user.repository.js";
import { app } from "./app.js";

export const userRepository = new UserRepository();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
