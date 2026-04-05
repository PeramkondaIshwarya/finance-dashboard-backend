const { body, validationResult } = require("express-validator");

// Validation rules for creating/updating finance records
const validateFinanceRecord = [
  body("amount")
    .isNumeric()
    .withMessage("Amount must be a number"),
  body("type")
    .isIn(["income", "expense"])
    .withMessage("Type must be either 'income' or 'expense'"),
  body("category")
    .notEmpty()
    .withMessage("Category is required"),
  body("date")
    .isISO8601()
    .withMessage("Date must be a valid ISO date"),
  body("notes")
    .optional()
    .isString()
    .withMessage("Notes must be a string"),

  // Middleware to catch validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateFinanceRecord };




