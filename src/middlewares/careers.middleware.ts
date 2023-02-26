import { check } from "express-validator";

export const validateNewJobApplication = [
  check("firstName")
    .isLength({ min: 5 })
    .withMessage("First name must be at least one character long")
    .trim()
    .escape(),
  check("lastName")
    .isLength({ min: 1 })
    .withMessage("Last name must be at least one character long")
    .trim()
    .escape(),
  check("email", "Valid email is required")
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail(),
  check("phone", "Valid phone number is required")
    .isMobilePhone("en-US")
    .trim()
    .escape(),
];

// https://heynode.com/tutorial/how-validate-and-sanitize-expressjs-form/
