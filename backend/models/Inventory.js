const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inventory = sequelize.define('Inventory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  reserved_quantity: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  available_quantity: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.quantity - this.reserved_quantity;
    },
  },
  unit_cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  total_value: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.quantity * this.unit_cost;
    },
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  batch_number: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  expiry_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  manufacture_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  supplier_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  purchase_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  minimum_stock_level: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  maximum_stock_level: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: 0,
    },
  },
  reorder_point: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  status: {
    type: DataTypes.ENUM('available', 'reserved', 'damaged', 'expired', 'sold'),
    allowNull: false,
    defaultValue: 'available',
  },
  quality_grade: {
    type: DataTypes.ENUM('A', 'B', 'C', 'Premium'),
    allowNull: true,
  },
  storage_conditions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'inventory',
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'product_id', 'batch_number'],
      name: 'unique_user_product_batch',
    },
  ],
});

// Instance methods
Inventory.prototype.isLowStock = function() {
  return this.quantity <= this.minimum_stock_level;
};

Inventory.prototype.needsReorder = function() {
  return this.quantity <= this.reorder_point;
};

Inventory.prototype.isExpiringSoon = function(days = 7) {
  if (!this.expiry_date) return false;
  const now = new Date();
  const expiryDate = new Date(this.expiry_date);
  const diffTime = expiryDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= days && diffDays > 0;
};

module.exports = Inventory;
