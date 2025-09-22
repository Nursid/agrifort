const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const userRoutes = require('./users');
const cropRoutes = require('./crops');

// API Routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/crops', cropRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Agriculture Dashboard API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// API documentation endpoint
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Agriculture Dashboard API',
    version: '1.0.0',
    documentation: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        profile: 'GET /api/auth/me',
        updateProfile: 'PUT /api/auth/profile',
        changePassword: 'PUT /api/auth/change-password',
        logout: 'POST /api/auth/logout',
      },
      users: {
        list: 'GET /api/users',
        get: 'GET /api/users/:id',
        create: 'POST /api/users',
        update: 'PUT /api/users/:id',
        delete: 'DELETE /api/users/:id',
        stats: 'GET /api/users/stats',
      },
      crops: {
        list: 'GET /api/crops',
        get: 'GET /api/crops/:id',
        create: 'POST /api/crops',
        update: 'PUT /api/crops/:id',
        delete: 'DELETE /api/crops/:id',
        stats: 'GET /api/crops/stats',
      },
    },
    roles: {
      admin: 'Full access to all resources',
      farmer: 'Manage own crops and profile',
      distributor: 'Manage orders and logistics',
      dealer: 'Manage customers and sales',
    },
  });
});

module.exports = router;
