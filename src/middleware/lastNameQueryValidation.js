import { query } from "express-validator";

export const validateLastName = [
  query("last_name").optional().notEmpty().withMessage("Last name is required"),
];
