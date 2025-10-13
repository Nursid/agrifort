const db = require("../models");
const ProductModel = db.Product;
const { Op } = require("sequelize");

// ✅ Create Product
const createProduct = async (req, res) => {
  try {
    const data = req.body;

    // Validate required fields
    if (!data.name || !data.price) {
      return res.status(400).json({
        success: false,
        message: "Name and price are required",
      });
    }

    // Create product
    const product = await ProductModel.create(data);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("Product Creation Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating product",
      error: error.message,
    });
  }
};

// ✅ Get All Products
const getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const offset = (page - 1) * limit;

    // Build search condition
    const whereCondition = search
      ? {
          [Op.or]: [
            { name: { [Op.like]: `%${search}%` } },
            { category: { [Op.like]: `%${search}%` } },
            { crops: { [Op.like]: `%${search}%` } },
          ],
        }
      : {};

    // Fetch total count and paginated data
    const { rows: products, count: totalCount } = await ProductModel.findAndCountAll({
      where: whereCondition,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["createdAt", "DESC"]],
    });

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        current_page: parseInt(page),
        total_pages: totalPages,
        total_count: totalCount,
      },
    });
  } catch (error) {
    console.error("Fetch Products Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching products",
      error: error.message,
    });
  }
};

// ✅ Get Product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Fetch Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching product",
      error: error.message,
    });
  }
};

// ✅ Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const product = await ProductModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.update(data);

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating product",
      error: error.message,
    });
  }
};

// ✅ Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.destroy();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting product",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
