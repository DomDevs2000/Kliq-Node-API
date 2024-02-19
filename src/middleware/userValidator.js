import { body, query, param } from "express-validator";

export const validateCreateUser = [
  body("application_id").notEmpty().withMessage("First name is required"),
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("First name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
  body("phone_number").notEmpty().withMessage("Phone number is required"),
  body("photo_url").isURL().withMessage("Invalid photo URL"),
  body("referral_url").isURL().withMessage("Invalid referral URL"),
];

export const validateUpdateUser = [
  body("application_id").notEmpty().withMessage("Application ID  is required"),
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
  body("phone_number").notEmpty().withMessage("Phone number is required"),
  body("photo_url").isURL().withMessage("Invalid photo URL"),
  body("referral_url").isURL().withMessage("Invalid referral URL"),
];

export const validateId = [
  param("id").optional().isInt().withMessage("Invalid ID"),
];

export const validateFirstName = [
  query("first_name")
    .optional()
    .notEmpty()
    .withMessage("First name is required"),
];

export const validateLastName = [
  query("last_name").optional().notEmpty().withMessage("Last name is required"),
];
