const express = require('express');
const router = express.Router();
const {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop,
  getCropStats,
} = require('../controllers/cropController');
const { authenticateToken, requireFarmerOrAdmin } = require('../middleware/auth');
const { 
  validateCrop,
  validateId,
  validatePagination 
} = require('../middleware/validation');

// @route   GET /api/crops/stats
// @desc    Get crop statistics
// @access  Private (Farmer or Admin)
router.get('/stats', authenticateToken, requireFarmerOrAdmin, getCropStats);

// @route   GET /api/crops
// @desc    Get all crops with pagination and filtering
// @access  Private (Farmer sees own crops, Admin sees all)
router.get('/', authenticateToken, requireFarmerOrAdmin, validatePagination, getCrops);

// @route   GET /api/crops/:id
// @desc    Get single crop
// @access  Private (Farmer owner or Admin)
router.get('/:id', authenticateToken, requireFarmerOrAdmin, validateId, getCrop);

// @route   POST /api/crops
// @desc    Create new crop
// @access  Private (Farmer or Admin)
router.post('/', authenticateToken, requireFarmerOrAdmin, validateCrop, createCrop);

// @route   PUT /api/crops/:id
// @desc    Update crop
// @access  Private (Farmer owner or Admin)
router.put('/:id', authenticateToken, requireFarmerOrAdmin, validateId, updateCrop);

// @route   DELETE /api/crops/:id
// @desc    Delete crop
// @access  Private (Farmer owner or Admin)
router.delete('/:id', authenticateToken, requireFarmerOrAdmin, validateId, deleteCrop);

module.exports = router;
