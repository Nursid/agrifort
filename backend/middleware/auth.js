const jwt = require("jsonwebtoken");
const db = require("../models");

const Admin = db.Admin;
const Farmer = db.Farmer;

// ✅ Middleware to protect Admin routes
const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const secret =
        process.env.JWT_SECRET || "agrifort_admin_secret_key_2024_development";

      const decoded = jwt.verify(token, secret);

      req.admin = await Admin.findByPk(decoded.id, {
        attributes: { exclude: ["password"] },
      });

      if (!req.admin) {
        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });
      }

      next();
    } catch (error) {
      console.error("Admin auth error:", error);
      return res.status(401).json({
        success: false,
        message: "Not authorized, invalid token",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token provided",
    });
  }
};

// ✅ Middleware to protect Farmer routes
const protectFarmer = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const secret =
        process.env.JWT_SECRET || "agrifort_farmer_secret_key_2024_development";

      const decoded = jwt.verify(token, secret);

      req.farmer = await Farmer.findByPk(decoded.id, {
        attributes: { exclude: ["password"] },
      });

      if (!req.farmer) {
        return res.status(404).json({
          success: false,
          message: "Farmer not found",
        });
      }

      next();
    } catch (error) {
      console.error("Farmer auth error:", error);
      return res.status(401).json({
        success: false,
        message: "Not authorized, invalid token",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token provided",
    });
  }
};

module.exports = { protectAdmin, protectFarmer };
