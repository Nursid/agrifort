const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required',
      });
    }

    const secret = process.env.JWT_SECRET || 'agrifort_default_secret_key_2024_development';
    const decoded = jwt.verify(token, secret);
    const user = await User.findByPk(decoded.id);

    if (!user || !user.is_active) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token or user not found',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired',
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Server error during authentication',
    });
  }
};

// Check if user has required role(s)
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Required roles: ${roles.join(', ')}. Your role: ${req.user.role}`,
      });
    }

    next();
  };
};

// Check if user is admin
const requireAdmin = authorizeRoles('admin');

// Check if user is farmer
const requireFarmer = authorizeRoles('farmer');

// Check if user is distributor
const requireDistributor = authorizeRoles('distributor');

// Check if user is dealer
const requireDealer = authorizeRoles('dealer');

// Check if user is farmer or admin (for crop management)
const requireFarmerOrAdmin = authorizeRoles('farmer', 'admin');

// Check if user is distributor or admin (for order management)
const requireDistributorOrAdmin = authorizeRoles('distributor', 'admin');

// Check if user is dealer or admin (for customer management)
const requireDealerOrAdmin = authorizeRoles('dealer', 'admin');

// Optional authentication - doesn't fail if no token
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      const secret = process.env.JWT_SECRET || 'agrifort_default_secret_key_2024_development';
    const decoded = jwt.verify(token, secret);
      const user = await User.findByPk(decoded.id);
      if (user && user.is_active) {
        req.user = user;
      }
    }
    next();
  } catch (error) {
    // Ignore errors for optional auth
    next();
  }
};

module.exports = {
  authenticateToken,
  authorizeRoles,
  requireAdmin,
  requireFarmer,
  requireDistributor,
  requireDealer,
  requireFarmerOrAdmin,
  requireDistributorOrAdmin,
  requireDealerOrAdmin,
  optionalAuth,
};
