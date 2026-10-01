const { body, validationResult } = require("express-validator");

// Product validation rules
const validateProduct = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Product name is required")
        .isLength({ min: 2 })
        .withMessage("Product name must be at least 2 characters"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Product category is required"),

    body("price")
        .notEmpty()
        .withMessage("Product price is required")
        .isFloat({ min: 0 })
        .withMessage("Price must be a positive number"),

    body("stock")
        .notEmpty()
        .withMessage("Stock is required")
        .isInt({ min: 0 })
        .withMessage("Stock must be a non-negative integer"),

    body("description")
        .optional()
        .trim()
];

// Check validation errors
const checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Validation failed",
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    validateProduct,
    checkValidation
};