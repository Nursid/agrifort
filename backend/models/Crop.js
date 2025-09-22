const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Crop = sequelize.define('Crop', {
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
  variety: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  farmer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  planting_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  expected_harvest_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  actual_harvest_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  area_planted: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  area_unit: {
    type: DataTypes.ENUM('acres', 'hectares', 'square_meters'),
    allowNull: false,
    defaultValue: 'acres',
  },
  expected_yield: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0,
    },
  },
  actual_yield: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0,
    },
  },
  yield_unit: {
    type: DataTypes.ENUM('kg', 'tons', 'quintals', 'pounds'),
    allowNull: false,
    defaultValue: 'kg',
  },
  status: {
    type: DataTypes.ENUM('planted', 'growing', 'ready_to_harvest', 'harvested', 'sold'),
    allowNull: false,
    defaultValue: 'planted',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  weather_conditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fertilizers_used: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pesticides_used: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'crops',
});

module.exports = Crop;
