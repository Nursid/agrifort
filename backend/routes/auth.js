const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  logoutAdmin,
} = require("../controllers/authController");
const { protectAdmin } = require("../middleware/auth");

// Public Routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected Routes
router.get("/me", protectAdmin, getAdminProfile);
router.post("/logout", protectAdmin, logoutAdmin);

module.exports = router;
