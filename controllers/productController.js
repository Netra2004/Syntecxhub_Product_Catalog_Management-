const Product = require("../models/Product");

// Add a new product
const createProduct = async (req, res) => {
    try {
        const { name, category, price, stock, description } = req.body;

        const product = await Product.create({
            name,
            category,
            price,
            stock,
            description
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });
    }
};


// Get all products with search and pagination
const getProducts = async (req, res) => {
    try {
        const { search, category } = req.query;

        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        // Search and filter
        let filter = {};

        // Search by product name
        if (search) {
            filter.name = {
                $regex: search,
                $options: "i"
            };
        }

        // Filter by category
        if (category) {
            filter.category = {
                $regex: category,
                $options: "i"
            };
        }

        // Get products
        const products = await Product.find(filter)
            .skip(skip)
            .limit(limit);

        // Count matching products
        const totalProducts = await Product.countDocuments(filter);

        res.status(200).json({
            totalProducts,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            products
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
};


// Get product statistics using MongoDB aggregation
const getProductStats = async (req, res) => {
    try {
        const stats = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    totalProducts: { $sum: 1 },
                    averagePrice: { $avg: "$price" },
                    totalStock: { $sum: "$stock" },
                    highestPrice: { $max: "$price" },
                    lowestPrice: { $min: "$price" }
                }
            }
        ]);

        res.status(200).json({
            message: "Product statistics fetched successfully",
            statistics: stats[0] || {
                totalProducts: 0,
                averagePrice: 0,
                totalStock: 0,
                highestPrice: 0,
                lowestPrice: 0
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product statistics",
            error: error.message
        });
    }
};


// Get a single product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch product",
            error: error.message
        });
    }
};


// Update a product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};


// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete product",
            error: error.message
        });
    }
};


// Export all controller functions
module.exports = {
    createProduct,
    getProducts,
    getProductStats,
    getProductById,
    updateProduct,
    deleteProduct
};