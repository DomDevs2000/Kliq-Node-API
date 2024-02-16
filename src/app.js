import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./controller/apiController.js";

const app = express();

// express options
app.use(cors()); // allow cors middleware

// parse request body as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use app router
app.use("/api", router);

// format json response
app.set("json space", 2);

// default route
app.use("/", (req, res) => {
  try {
    res.status(200);
    res.send("Welcome to JoinKliq Users API");
  } catch (error) {
    console.error(error);
  }
});
export { app };
