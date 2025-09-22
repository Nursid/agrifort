const { User } = require('../models');
const { Op } = require('sequelize');

// @desc    Get all users
// @route   GET /api/users
// @access  Private (Admin only)
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const role = req.query.role;
    const search = req.query.search;

    // Build where clause
    const where = {};
    if (role) {
      where.role = role;
    }
    if (search) {
      where[Op.or] = [
        { first_name: { [Op.like]: `%${search}%` } },
        { last_name: { [Op.like]: `%${search}%` } },
        { username: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
      ];
    }

    const { count, rows: users } = await User.findAndCountAll({
      where,
      limit,
      offset,
      order: [['created_at', 'DESC']],
    });

    const totalPages = Math.ceil(count / limit);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          current_page: page,
          total_pages: totalPages,
          total_count: count,
          per_page: limit,
        },
      },
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching users',
    });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private (Admin or own profile)
const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if user is admin or accessing own profile
    if (req.user.role !== 'admin' && req.user.id !== parseInt(id)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user',
    });
  }
};

// @desc    Create new user
// @route   POST /api/users
// @access  Private (Admin only)
const createUser = async (req, res) => {
  try {
    const { username, email, password, role, first_name, last_name, phone, address, city, state, country, postal_code } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists',
      });
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password,
      role,
      first_name,
      last_name,
      phone,
      address,
      city,
      state,
      country,
      postal_code,
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: { user },
    });
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating user',
    });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private (Admin or own profile)
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, role, first_name, last_name, phone, address, city, state, country, postal_code, is_active } = req.body;

    // Check if user is admin or updating own profile
    if (req.user.role !== 'admin' && req.user.id !== parseInt(id)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Non-admin users cannot change role or is_active status
    const updateData = {
      username: username || user.username,
      email: email || user.email,
      first_name: first_name || user.first_name,
      last_name: last_name || user.last_name,
      phone: phone || user.phone,
      address: address || user.address,
      city: city || user.city,
      state: state || user.state,
      country: country || user.country,
      postal_code: postal_code || user.postal_code,
    };

    if (req.user.role === 'admin') {
      updateData.role = role || user.role;
      updateData.is_active = is_active !== undefined ? is_active : user.is_active;
    }

    // Check for duplicate username/email
    if (username !== user.username || email !== user.email) {
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email: updateData.email }, { username: updateData.username }],
          id: { [Op.ne]: id },
        },
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'User with this email or username already exists',
        });
      }
    }

    await user.update(updateData);

    res.json({
      success: true,
      message: 'User updated successfully',
      data: { user },
    });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating user',
    });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private (Admin only)
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent admin from deleting themselves
    if (req.user.id === parseInt(id)) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own account',
      });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    await user.destroy();

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting user',
    });
  }
};

// @desc    Get user statistics
// @route   GET /api/users/stats
// @access  Private (Admin only)
const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const activeUsers = await User.count({ where: { is_active: true } });
    const usersByRole = await User.findAll({
      attributes: [
        'role',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
      ],
      group: ['role'],
      raw: true,
    });

    const recentUsers = await User.findAll({
      limit: 5,
      order: [['created_at', 'DESC']],
    });

    res.json({
      success: true,
      data: {
        total_users: totalUsers,
        active_users: activeUsers,
        inactive_users: totalUsers - activeUsers,
        users_by_role: usersByRole,
        recent_users: recentUsers,
      },
    });
  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching user statistics',
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserStats,
};
