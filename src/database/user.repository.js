import mysql from "mysql2/promise";
//creates a new mysql connection
let connection;
try {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "joinkliq",
    password: "joinkliq",
    database: "joinkliq_users",
  });
  // connects to the database
  console.log("Connected to MySQL");
} catch (error) {
  console.error("Error connecting to MySQL:", error);
}

// method to get all users
async function getAllUsers() {
  try {
    const [results] = await connection.query("SELECT * FROM users");
    console.log(results);
    return results;
  } catch (error) {
    console.log(err);
  }
}

export default { getAllUsers };
