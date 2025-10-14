const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const db = require("../models");
const Admin = db.Admin;

// ✅ Generate JWT Token
const generateToken = (id) => {
  const secret =
    process.env.JWT_SECRET ||
    "agrifort_admin_secret_key_2024_development";
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  }); 
};

// ✅ Admin Registration
// @route   POST /api/admin/register
// @access  Public (you can protect it later)
const registerAdmin = async (req, res) => {
  try {
    const { name, email, role, mobileNo, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      where: { [Op.or]: [{ email }, { mobileNo }] },
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this email or mobile number already exists",
      });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      role,
      mobileNo,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(admin.id);

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        admin: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
          mobileNo: admin.mobileNo,
        },
        token,
      },
    });
  } catch (error) {
    console.error("Admin Register Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during admin registration",
    });
  }
};

// ✅ Admin Login
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password (decrypt)
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT
    const token = generateToken(admin.id);

    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      data: {
        user:{
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: 'admin',
          mobileNo: admin.mobileNo,
        },
          token,
      },
    });
  } catch (error) {
    console.error("Admin Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during admin login",
    });
  }
};

// ✅ Get Current Admin
// @route   GET /api/admin/me
// @access  Private
const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.admin.id, {
      attributes: ["id", "name", "email", "role", "mobileNo", "createdAt"],
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    console.error("Get Admin Profile Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ Logout Admin (client-side JWT removal)
const logoutAdmin = async (req, res) => {
  res.json({
    success: true,
    message: "Logout successful (client-side token removed)",
  });
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  logoutAdmin,
};
