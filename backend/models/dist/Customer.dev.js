"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../config/database');

var Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dealer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
      notEmpty: true
    }
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      len: [10, 20],
      notEmpty: true
    }
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: 'India'
  },
  postal_code: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  customer_type: {
    type: DataTypes.ENUM('individual', 'business', 'retailer', 'wholesaler'),
    allowNull: false,
    defaultValue: 'individual'
  },
  business_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  tax_id: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  credit_limit: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  current_balance: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    defaultValue: 0
  },
  payment_terms: {
    type: DataTypes.ENUM('cash', 'net_15', 'net_30', 'net_60', 'custom'),
    allowNull: false,
    defaultValue: 'cash'
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  registration_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  last_purchase_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  total_purchases: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'customers'
}); // Instance methods

Customer.prototype.getFullName = function () {
  return "".concat(this.first_name, " ").concat(this.last_name);
};

Customer.prototype.getDisplayName = function () {
  return this.business_name || this.getFullName();
};

module.exports = Customer;