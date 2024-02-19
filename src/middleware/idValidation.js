import { param } from "express-validator";
export const validateId = [
  param("id").optional().isInt().withMessage("Invalid ID"),
];
