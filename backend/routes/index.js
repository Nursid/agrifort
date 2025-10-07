const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const userRoutes = require('./users');
const cropRoutes = require('./crops');
const distributorRoutes = require('./distributor');

// API Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/distributor', distributorRoutes);
router.use('/crops', cropRoutes);


module.exports = router;
