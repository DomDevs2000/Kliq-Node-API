import mysql from "mysql";

class UserRepository {
  constructor() {
    //creates a new mysql connection
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "joinkliq",
      password: "joinkliq",
      database: "joinkliq_users",
    });
    // connects to the database
    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL:", err);
        throw err;
      }
      console.log("Connected to MySQL");
    });
  }
  // method to get all users
  getAllUsers() {
    const selectAllQuery = "SELECT * FROM users";
    this.connection.query(selectAllQuery, (err, results) => {
      if (err) {
        console.error("Error fetching all users:", err);
      } else {
        console.log("Fetched all users successfully", results);
      }
    });
  }
}
export { UserRepository };
