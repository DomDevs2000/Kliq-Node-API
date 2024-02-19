import { query } from "express-validator";
export const validateFirstName = [
  query("first_name")
    .optional()
    .notEmpty()
    .withMessage("First name is required"),
];
