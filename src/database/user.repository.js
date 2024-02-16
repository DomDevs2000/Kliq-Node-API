import mysql from "mysql2";

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
    this.connection.query(
      "SELECT * FROM users",
      function (err, results, fields) {
        if (err) console.log(err);
        console.log(results);
        console.log(fields);
      },
    );
  }
}
export { UserRepository };
