import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// express options
app.use(cors()); // allow cors middleware

// parse request body as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// format json response
app.set("json space", 2);

export { app };
