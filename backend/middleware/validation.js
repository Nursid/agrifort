const { body, param, query, validationResult } = require('express-validator');

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value,
      })),
    });
  }
  next();
};

// User validation rules
const validateUserRegistration = [
  body('username')
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one number'),
  body('role')
    .isIn(['admin', 'farmer', 'distributor', 'dealer'])
    .withMessage('Role must be one of: admin, farmer, distributor, dealer'),
  body('first_name')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First name can only contain letters and spaces'),
  body('last_name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Last name can only contain letters and spaces'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  handleValidationErrors,
];

const validateUserLogin = [
  body('username')
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors,
];

const validateUserUpdate = [
  body('username')
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage('Username must be between 3 and 50 characters'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('first_name')
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('last_name')
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  handleValidationErrors,
];

// Crop validation rules
const validateCrop = [
  body('name')
    .isLength({ min: 2, max: 100 })
    .withMessage('Crop name must be between 2 and 100 characters'),
  body('planting_date')
    .isISO8601()
    .withMessage('Please provide a valid planting date (YYYY-MM-DD)'),
  body('area_planted')
    .isFloat({ min: 0.01 })
    .withMessage('Area planted must be a positive number'),
  body('area_unit')
    .isIn(['acres', 'hectares', 'square_meters'])
    .withMessage('Area unit must be one of: acres, hectares, square_meters'),
  body('expected_yield')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Expected yield must be a positive number'),
  body('yield_unit')
    .isIn(['kg', 'tons', 'quintals', 'pounds'])
    .withMessage('Yield unit must be one of: kg, tons, quintals, pounds'),
  body('status')
    .optional()
    .isIn(['planted', 'growing', 'ready_to_harvest', 'harvested', 'sold'])
    .withMessage('Status must be one of: planted, growing, ready_to_harvest, harvested, sold'),
  handleValidationErrors,
];

// Product validation rules
const validateProduct = [
  body('name')
    .isLength({ min: 2, max: 100 })
    .withMessage('Product name must be between 2 and 100 characters'),
  body('category')
    .isIn(['grains', 'vegetables', 'fruits', 'dairy', 'meat', 'seeds', 'fertilizers', 'equipment'])
    .withMessage('Category must be one of the allowed values'),
  body('unit')
    .isIn(['kg', 'tons', 'quintals', 'pounds', 'liters', 'pieces'])
    .withMessage('Unit must be one of: kg, tons, quintals, pounds, liters, pieces'),
  body('base_price')
    .isFloat({ min: 0.01 })
    .withMessage('Base price must be a positive number'),
  body('minimum_order_quantity')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Minimum order quantity must be at least 1'),
  handleValidationErrors,
];

// Order validation rules
const validateOrder = [
  body('customer_id')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Customer ID must be a positive integer'),
  body('order_type')
    .isIn(['purchase', 'sale'])
    .withMessage('Order type must be either purchase or sale'),
  body('total_amount')
    .isFloat({ min: 0 })
    .withMessage('Total amount must be a positive number'),
  body('payment_method')
    .optional()
    .isIn(['cash', 'card', 'bank_transfer', 'upi', 'wallet'])
    .withMessage('Payment method must be one of the allowed values'),
  handleValidationErrors,
];

// Customer validation rules
const validateCustomer = [
  body('first_name')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
  body('last_name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
  body('phone')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('customer_type')
    .isIn(['individual', 'business', 'retailer', 'wholesaler'])
    .withMessage('Customer type must be one of: individual, business, retailer, wholesaler'),
  body('credit_limit')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Credit limit must be a positive number'),
  handleValidationErrors,
];

// Inventory validation rules
const validateInventory = [
  body('product_id')
    .isInt({ min: 1 })
    .withMessage('Product ID must be a positive integer'),
  body('quantity')
    .isFloat({ min: 0 })
    .withMessage('Quantity must be a positive number'),
  body('unit_cost')
    .isFloat({ min: 0 })
    .withMessage('Unit cost must be a positive number'),
  body('minimum_stock_level')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Minimum stock level must be a positive number'),
  body('reorder_point')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Reorder point must be a positive number'),
  handleValidationErrors,
];

// Parameter validation
const validateId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('ID must be a positive integer'),
  handleValidationErrors,
];

// Query validation
const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  handleValidationErrors,
];

module.exports = {
  handleValidationErrors,
  validateUserRegistration,
  validateUserLogin,
  validateUserUpdate,
  validateCrop,
  validateProduct,
  validateOrder,
  validateCustomer,
  validateInventory,
  validateId,
  validatePagination,
};
