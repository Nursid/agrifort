const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserStats,
} = require('../controllers/userController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { 
  validateUserRegistration, 
  validateUserUpdate,
  validateId,
  validatePagination 
} = require('../middleware/validation');

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Private (Admin only)
router.get('/stats', authenticateToken, requireAdmin, getUserStats);

// @route   GET /api/users
// @desc    Get all users with pagination and filtering
// @access  Private (Admin only)
router.get('/', authenticateToken, requireAdmin, validatePagination, getUsers);

// @route   GET /api/users/:id
// @desc    Get single user
// @access  Private (Admin or own profile)
router.get('/:id', authenticateToken, validateId, getUser);

// @route   POST /api/users
// @desc    Create new user
// @access  Private (Admin only)
router.post('/', authenticateToken, requireAdmin, validateUserRegistration, createUser);

// @route   PUT /api/users/:id
// @desc    Update user
// @access  Private (Admin or own profile)
router.put('/:id', authenticateToken, validateId, validateUserUpdate, updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete user
// @access  Private (Admin only)
router.delete('/:id', authenticateToken, requireAdmin, validateId, deleteUser);

module.exports = router;
