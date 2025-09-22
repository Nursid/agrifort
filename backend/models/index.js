const sequelize = require('../config/database');
const User = require('./User');
const Crop = require('./Crop');
const Order = require('./Order');
const Product = require('./Product');
const Customer = require('./Customer');
const Inventory = require('./Inventory');

// Define associations
// User.hasMany(Crop, { foreignKey: 'farmer_id', as: 'crops' });
// Crop.belongsTo(User, { foreignKey: 'farmer_id', as: 'farmer' });

// User.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });
// Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// User.hasMany(Customer, { foreignKey: 'dealer_id', as: 'customers' });
// Customer.belongsTo(User, { foreignKey: 'dealer_id', as: 'dealer' });

// Product.hasMany(Inventory, { foreignKey: 'product_id', as: 'inventories' });
// Inventory.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });

// User.hasMany(Inventory, { foreignKey: 'user_id', as: 'inventories' });
// Inventory.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Order.hasMany(Product, { through: 'OrderProducts', as: 'products' });
// Product.belongsToMany(Order, { through: 'OrderProducts', as: 'orders' });

module.exports = {
  sequelize,
  User,
  Crop,
  Order,
  Product,
  Customer,
  Inventory,
};
