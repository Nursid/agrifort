const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_number: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'customers',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'),
    allowNull: false,
    defaultValue: 'pending',
  },
  order_type: {
    type: DataTypes.ENUM('purchase', 'sale'),
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  currency: {
    type: DataTypes.STRING(3),
    allowNull: false,
    defaultValue: 'INR',
  },
  tax_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  discount_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  shipping_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  payment_method: {
    type: DataTypes.ENUM('cash', 'card', 'bank_transfer', 'upi', 'wallet'),
    allowNull: true,
  },
  payment_status: {
    type: DataTypes.ENUM('pending', 'paid', 'partial', 'failed', 'refunded'),
    allowNull: false,
    defaultValue: 'pending',
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  expected_delivery_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  actual_delivery_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  shipping_address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  billing_address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tracking_number: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'orders',
  hooks: {
    beforeCreate: async (order) => {
      if (!order.order_number) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        order.order_number = `ORD-${timestamp}-${random}`;
      }
    },
  },
});

module.exports = Order;
