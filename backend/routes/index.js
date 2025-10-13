const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const farmerRoutes = require('./farmer');
const productRoutes = require('./product')
// API Routes
router.use('/auth', authRoutes);
router.use('/farmer', farmerRoutes);
router.use('/product', productRoutes);

module.exports = router;
