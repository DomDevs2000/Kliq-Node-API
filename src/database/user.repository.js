import mysql from "mysql2/promise";
import { v4 as uuidv4 } from "uuid";
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
    return results;
  } catch (error) {
    console.log(err);
  }
}

async function findUserById(id) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
    );
    return results;
  } catch (error) {
    console.log(err);
  }
}

async function findUserByFirstName(firstName) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM users WHERE first_name = ?",
      [firstName],
    );
    return results;
  } catch (error) {
    console.log(error);
  }
}
async function findUserByLastName(lastName) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM users WHERE last_name = ?",
      [lastName],
    );
    return results;
  } catch (error) {
    console.log(error);
  }
}
// TODO:new function find by both names - use & statement

async function findUserByBothNames(firstName, lastName) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM users WHERE first_name = ? AND last_name = ?",
      [firstName, lastName],
    );
    return results;
  } catch (error) {
    console.log(error);
  }
}
// IMPORt UUID change user.id to uuid
async function createUser(user) {
  try {
    await user.hashPassword();
    const results = await connection.query(
      "INSERT INTO users (id, application_id,first_name, last_name, email, password, phone_number, photo_url, referral_url) VALUES (?,?, ?, ?, ? , ? ,? , ?, ?)",
      [
        uuidv4(),
        user.application_id,
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.phone_number,
        user.photo_url,
        user.referral_url,
      ],
    );

    return results;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    const results = await connection.query("DELETE FROM users WHERE id = ?", [
      id,
    ]);
    return results;
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(id, user) {
  try {
    await user.hashPassword();
    const results = await connection.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ?, photo_url = ?, referral_url = ? WHERE id = ?",
      [
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.phone_number,
        user.photo_url,
        user.referral_url,
        id,
      ],
    );
    return results;
  } catch (error) {
    console.log(error);
  }
}

export default {
  getAllUsers,
  findUserById,
  findUserByFirstName,
  findUserByLastName,
  createUser,
  deleteUser,
  updateUser,
  findUserByBothNames,
};
