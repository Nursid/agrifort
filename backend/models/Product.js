const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [2, 100],
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.ENUM('grains', 'vegetables', 'fruits', 'dairy', 'meat', 'seeds', 'fertilizers', 'equipment'),
    allowNull: false,
  },
  unit: {
    type: DataTypes.ENUM('kg', 'tons', 'quintals', 'pounds', 'liters', 'pieces'),
    allowNull: false,
    defaultValue: 'kg',
  },
  base_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  currency: {
    type: DataTypes.STRING(3),
    allowNull: false,
    defaultValue: 'INR',
  },
  sku: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
  },
  barcode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  minimum_order_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
  is_perishable: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  shelf_life_days: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
    },
  },
  storage_conditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  origin_country: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: 'India',
  },
  quality_grade: {
    type: DataTypes.ENUM('A', 'B', 'C', 'Premium'),
    allowNull: true,
  },
  organic_certified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'products',
});

module.exports = Product;
