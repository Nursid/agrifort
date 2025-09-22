const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 50],
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [6, 255],
      notEmpty: true,
    },
  },
  role: {
    type: DataTypes.ENUM('admin', 'farmer', 'distributor', 'dealer'),
    allowNull: false,
    defaultValue: 'farmer',
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
      notEmpty: true,
    },
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
      notEmpty: true,
    },
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      len: [10, 20],
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: 'India',
  },
  postal_code: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  profile_image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'users',
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
  },
});

// Instance methods
User.prototype.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

User.prototype.getFullName = function() {
  return `${this.first_name} ${this.last_name}`;
};

User.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

module.exports = User;
