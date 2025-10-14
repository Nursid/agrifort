const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/farmerController");
const { protectFarmer, protectAdmin } = require("../middleware/auth");

// Register and login
router.post("/register", farmerController.registerFarmer);
router.post("/login", farmerController.loginFarmer);

// Protected routes
router.get("/me", protectFarmer, farmerController.getFarmerProfile);
router.get("/getall", protectAdmin, farmerController.getAllFarmers);
router.post("/logout", protectFarmer, farmerController.logoutFarmer);

module.exports = router;
