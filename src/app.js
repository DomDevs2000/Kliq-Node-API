import express from "express";

export const app = express();
app.use(cors());
app.set("json space", 2);
