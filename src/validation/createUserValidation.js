import { body } from "express-validator";

export const validateCreateUser = [
  body("application_id").notEmpty().withMessage("Application ID is required"),
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
  body("phone_number").notEmpty().withMessage("Phone number is required"),
  body("photo_url").isURL().withMessage("Invalid photo URL"),
  body("referral_url").isURL().withMessage("Invalid referral URL"),
];
