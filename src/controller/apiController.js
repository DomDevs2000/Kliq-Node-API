import express from "express";
const router = express.Router();
import { connection } from "../database/db.js";

router.get("/", async (req, res) => {
  try {
    let sql = "SELECT * FROM users";
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
});

export { router };
