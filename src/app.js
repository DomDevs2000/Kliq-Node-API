import express from "express";
import { connection } from "./database/db.js";

const app = express();

//mysql db connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  app.listen(3000, () => console.log("Server started on port 3000"));
  console.log("connected as id " + connection.threadId);
});
