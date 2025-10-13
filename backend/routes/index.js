const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const farmerRoutes = require('./farmer');
// API Routes
router.use('/auth', authRoutes);
router.use('/farmer', farmerRoutes);

module.exports = router;
