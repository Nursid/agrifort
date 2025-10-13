const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const db = require("../models");
const Farmer = db.Farmer;

// ✅ Generate JWT Token
const generateToken = (id) => {
  const secret =
    process.env.JWT_SECRET || "agrifort_farmer_secret_key_2024_development";
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// ✅ Farmer Registration
// @route   POST /api/farmer/register
// @access  Public
const registerFarmer = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      phone,
      address,
      city,
      state,
      country,
      postal_code,
      profile_image,
    } = req.body;

    // Check if farmer already exists
    const existingFarmer = await Farmer.findOne({
      where: { [Op.or]: [{ email }, { username }] },
    });

    if (existingFarmer) {
      return res.status(400).json({
        success: false,
        message: "Farmer with this email or username already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create farmer
    const farmer = await Farmer.create({
      username,
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone,
      address,
      city,
      state,
      country,
      postal_code,
      profile_image,
    });

    // Generate JWT
    const token = generateToken(farmer.id);

    res.status(201).json({
      success: true,
      message: "Farmer registered successfully",
      data: {
        user: {
          id: farmer.id,
          username: farmer.username,
          email: farmer.email,
          first_name: farmer.first_name,
          last_name: farmer.last_name,
          phone: farmer.phone,
          address: farmer.address,
          city: farmer.city,
          state: farmer.state,
          country: farmer.country,
          postal_code: farmer.postal_code,
        },
        token,
      },
    });
  } catch (error) {
    console.error("Farmer Register Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during farmer registration",
    });
  }
};

// ✅ Farmer Login
// @route   POST /api/farmer/login
// @access  Public
const loginFarmer = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find farmer by username or email
    const farmer = await Farmer.findOne({
      where: {
         email: email,
         is_active: true,
      },
    });

    if (!farmer) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, farmer.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    // Update last login
    await farmer.update({ last_login: new Date() });

    // Generate JWT
    const token = generateToken(farmer.id);

    res.status(200).json({
      success: true,
      message: "Farmer logged in successfully",
      data: {
        user: {
          id: farmer.id,
          username: farmer.username,
          email: farmer.email,
          first_name: farmer.first_name,
          last_name: farmer.last_name,
          phone: farmer.phone,
          address: farmer.address,
          city: farmer.city,
          state: farmer.state,
          country: farmer.country,
          postal_code: farmer.postal_code,
          profile_image: farmer.profile_image,
          role: 'farmer'
        },
        token,
      },
    });
  } catch (error) {
    console.error("Farmer Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during farmer login",
    });
  }
};

// ✅ Get Current Farmer Profile
// @route   GET /api/farmer/me
// @access  Private
const getFarmerProfile = async (req, res) => {
  try {
    const farmer = await Farmer.findByPk(req.farmer.id, {
      attributes: [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "phone",
        "address",
        "city",
        "state",
        "country",
        "postal_code",
        "profile_image",
        "createdAt",
        "last_login",
      ],
    });

    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: "Farmer not found",
      });
    }

    res.status(200).json({
      success: true,
      data: farmer,
    });
  } catch (error) {
    console.error("Get Farmer Profile Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ✅ Logout Farmer (client-side JWT removal)
const logoutFarmer = async (req, res) => {
  res.json({
    success: true,
    message: "Logout successful (client-side token removed)",
  });
};


const getAllFarmers = async (req, res) => {
  try {
    let { page = 1, limit = 10, search } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    const offset = (page - 1) * limit;

    // Build search/filter condition
    const whereCondition = {
      is_active: true, // optional: only active farmers
    };

    if (search) {
      whereCondition[Op.or] = [
        { username: { [Op.like]: `%${search}%` } },
        { first_name: { [Op.like]: `%${search}%` } },
        { last_name: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
      ];
    }

    const { count, rows: farmers } = await Farmer.findAndCountAll({
      where: whereCondition,
      attributes: [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "phone",
        "address",
        "city",
        "state",
        "country",
        "postal_code",
        "profile_image",
        "is_active",
        "createdAt",
        "last_login",
      ],
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    res.status(200).json({
      success: true,
      data: farmers,
      pagination: {
        total_count: count,
        total_pages: totalPages,
        current_page: page,
      },
    });
  } catch (error) {
    console.error("Get All Farmers Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching farmers",
    });
  }
};


module.exports = {
  registerFarmer,
  loginFarmer,
  getFarmerProfile,
  logoutFarmer,
  getAllFarmers
};
