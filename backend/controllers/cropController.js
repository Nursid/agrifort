const { Crop, User } = require('../models');
const { Op } = require('sequelize');

// @desc    Get all crops
// @route   GET /api/crops
// @access  Private
const getCrops = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const status = req.query.status;
    const search = req.query.search;
    const farmer_id = req.query.farmer_id;

    // Build where clause
    const where = {};
    
    // Non-admin users can only see their own crops
    if (req.user.role !== 'admin') {
      where.farmer_id = req.user.id;
    } else if (farmer_id) {
      where.farmer_id = farmer_id;
    }

    if (status) {
      where.status = status;
    }
    if (search) {
      where[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { variety: { [Op.like]: `%${search}%` } },
        { location: { [Op.like]: `%${search}%` } },
      ];
    }

    const { count, rows: crops } = await Crop.findAndCountAll({
      where,
      include: [
        {
          model: User,
          as: 'farmer',
          attributes: ['id', 'first_name', 'last_name', 'username'],
        },
      ],
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });

    const totalPages = Math.ceil(count / limit);

    res.json({
      success: true,
      data: {
        crops,
        pagination: {
          current_page: page,
          total_pages: totalPages,
          total_count: count,
          per_page: limit,
        },
      },
    });
  } catch (error) {
    console.error('Get crops error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching crops',
    });
  }
};

// @desc    Get single crop
// @route   GET /api/crops/:id
// @access  Private
const getCrop = async (req, res) => {
  try {
    const { id } = req.params;

    const crop = await Crop.findByPk(id, {
      include: [
        {
          model: User,
          as: 'farmer',
          attributes: ['id', 'first_name', 'last_name', 'username'],
        },
      ],
    });

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: 'Crop not found',
      });
    }

    // Non-admin users can only access their own crops
    if (req.user.role !== 'admin' && crop.farmer_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    res.json({
      success: true,
      data: { crop },
    });
  } catch (error) {
    console.error('Get crop error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching crop',
    });
  }
};

// @desc    Create new crop
// @route   POST /api/crops
// @access  Private (Farmer or Admin)
const createCrop = async (req, res) => {
  try {
    const {
      name,
      variety,
      planting_date,
      expected_harvest_date,
      area_planted,
      area_unit,
      expected_yield,
      yield_unit,
      notes,
      location,
      weather_conditions,
      fertilizers_used,
      pesticides_used,
    } = req.body;

    // Set farmer_id to current user if not admin
    const farmer_id = req.user.role === 'admin' && req.body.farmer_id ? req.body.farmer_id : req.user.id;

    // Validate farmer exists if admin is creating for another farmer
    if (req.user.role === 'admin' && req.body.farmer_id) {
      const farmer = await User.findOne({
        where: { id: req.body.farmer_id, role: 'farmer' },
      });
      if (!farmer) {
        return res.status(400).json({
          success: false,
          message: 'Invalid farmer ID',
        });
      }
    }

    const crop = await Crop.create({
      name,
      variety,
      farmer_id,
      planting_date,
      expected_harvest_date,
      area_planted,
      area_unit,
      expected_yield,
      yield_unit,
      notes,
      location,
      weather_conditions,
      fertilizers_used,
      pesticides_used,
    });

    // Fetch crop with farmer details
    const cropWithFarmer = await Crop.findByPk(crop.id, {
      include: [
        {
          model: User,
          as: 'farmer',
          attributes: ['id', 'first_name', 'last_name', 'username'],
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: 'Crop created successfully',
      data: { crop: cropWithFarmer },
    });
  } catch (error) {
    console.error('Create crop error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating crop',
    });
  }
};

// @desc    Update crop
// @route   PUT /api/crops/:id
// @access  Private (Farmer owner or Admin)
const updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      variety,
      planting_date,
      expected_harvest_date,
      actual_harvest_date,
      area_planted,
      area_unit,
      expected_yield,
      actual_yield,
      yield_unit,
      status,
      notes,
      location,
      weather_conditions,
      fertilizers_used,
      pesticides_used,
    } = req.body;

    const crop = await Crop.findByPk(id);
    if (!crop) {
      return res.status(404).json({
        success: false,
        message: 'Crop not found',
      });
    }

    // Non-admin users can only update their own crops
    if (req.user.role !== 'admin' && crop.farmer_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    await crop.update({
      name: name || crop.name,
      variety: variety || crop.variety,
      planting_date: planting_date || crop.planting_date,
      expected_harvest_date: expected_harvest_date || crop.expected_harvest_date,
      actual_harvest_date: actual_harvest_date || crop.actual_harvest_date,
      area_planted: area_planted !== undefined ? area_planted : crop.area_planted,
      area_unit: area_unit || crop.area_unit,
      expected_yield: expected_yield !== undefined ? expected_yield : crop.expected_yield,
      actual_yield: actual_yield !== undefined ? actual_yield : crop.actual_yield,
      yield_unit: yield_unit || crop.yield_unit,
      status: status || crop.status,
      notes: notes || crop.notes,
      location: location || crop.location,
      weather_conditions: weather_conditions || crop.weather_conditions,
      fertilizers_used: fertilizers_used || crop.fertilizers_used,
      pesticides_used: pesticides_used || crop.pesticides_used,
    });

    // Fetch updated crop with farmer details
    const updatedCrop = await Crop.findByPk(id, {
      include: [
        {
          model: User,
          as: 'farmer',
          attributes: ['id', 'first_name', 'last_name', 'username'],
        },
      ],
    });

    res.json({
      success: true,
      message: 'Crop updated successfully',
      data: { crop: updatedCrop },
    });
  } catch (error) {
    console.error('Update crop error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating crop',
    });
  }
};

// @desc    Delete crop
// @route   DELETE /api/crops/:id
// @access  Private (Farmer owner or Admin)
const deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;

    const crop = await Crop.findByPk(id);
    if (!crop) {
      return res.status(404).json({
        success: false,
        message: 'Crop not found',
      });
    }

    // Non-admin users can only delete their own crops
    if (req.user.role !== 'admin' && crop.farmer_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    await crop.destroy();

    res.json({
      success: true,
      message: 'Crop deleted successfully',
    });
  } catch (error) {
    console.error('Delete crop error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting crop',
    });
  }
};

// @desc    Get crop statistics
// @route   GET /api/crops/stats
// @access  Private
const getCropStats = async (req, res) => {
  try {
    // Build where clause for user role
    const where = {};
    if (req.user.role !== 'admin') {
      where.farmer_id = req.user.id;
    }

    const totalCrops = await Crop.count({ where });
    const { sequelize } = require('../models');
    const cropsByStatus = await Crop.findAll({
      attributes: [
        'status',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
      ],
      where,
      group: ['status'],
      raw: true,
    });

    const totalArea = await Crop.sum('area_planted', { where }) || 0;
    const totalYield = await Crop.sum('actual_yield', { 
      where: { ...where, actual_yield: { [Op.not]: null } } 
    }) || 0;

    const recentCrops = await Crop.findAll({
      where,
      include: [
        {
          model: User,
          as: 'farmer',
          attributes: ['id', 'first_name', 'last_name', 'username'],
        },
      ],
      limit: 5,
      order: [['created_at', 'DESC']],
    });

    res.json({
      success: true,
      data: {
        total_crops: totalCrops,
        crops_by_status: cropsByStatus,
        total_area_planted: totalArea,
        total_yield: totalYield,
        recent_crops: recentCrops,
      },
    });
  } catch (error) {
    console.error('Get crop stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching crop statistics',
    });
  }
};

module.exports = {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop,
  getCropStats,
};
