const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middleware/uploadImage")
// CREATE
router.post("/add", upload.single("image"), productController.createProduct);

// READ
router.get("/getall", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// UPDATE
router.put("/:id", upload.single("image"), productController.updateProduct);

// DELETE
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.getAllProductswithCategory);

module.exports = router;
