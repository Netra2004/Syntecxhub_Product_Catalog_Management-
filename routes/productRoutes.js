const express = require("express");

const {
    validateProduct,
    checkValidation
} = require("../middleware/validateProduct");

const protect = require("../middleware/authMiddleware");

const {
    createProduct,
    getProducts,
    getProductStats,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// Protected: Create product
router.post(
    "/",
    protect,
    validateProduct,
    checkValidation,
    createProduct
);

// Public: Get all products
router.get("/", getProducts);

// Public: Get product statistics
router.get("/stats", getProductStats);

// Public: Get single product
router.get("/:id", getProductById);

// Protected: Update product
router.put(
    "/:id",
    protect,
    validateProduct,
    checkValidation,
    updateProduct
);

// Protected: Delete product
router.delete("/:id", protect, deleteProduct);

module.exports = router;