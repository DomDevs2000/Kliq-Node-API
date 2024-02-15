import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "joinkliq",
  password: "joinkliq",
});
