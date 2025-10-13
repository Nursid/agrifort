const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// CREATE
router.post("/add", productController.createProduct);

// READ
router.get("/getall", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// UPDATE
router.put("/:id", productController.updateProduct);

// DELETE
router.delete("/:id", productController.deleteProduct);

module.exports = router;
