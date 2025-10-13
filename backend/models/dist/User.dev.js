"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var bcrypt = require('bcryptjs');

var sequelize = require('../config/database');

var User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [3, 50],
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [6, 255],
      notEmpty: true
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'farmer', 'distributor', 'dealer'),
    allowNull: false,
    defaultValue: 'farmer'
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
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      len: [10, 20]
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
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true
  },
  profile_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'users',
  // Remove explicit indexes to avoid key limit issues
  // Sequelize will create basic indexes for unique fields and foreign keys
  hooks: {
    beforeCreate: function beforeCreate(user) {
      var salt;
      return regeneratorRuntime.async(function beforeCreate$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!user.password) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(bcrypt.genSalt(12));

            case 3:
              salt = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(bcrypt.hash(user.password, salt));

            case 6:
              user.password = _context.sent;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    beforeUpdate: function beforeUpdate(user) {
      var salt;
      return regeneratorRuntime.async(function beforeUpdate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!user.changed('password')) {
                _context2.next = 7;
                break;
              }

              _context2.next = 3;
              return regeneratorRuntime.awrap(bcrypt.genSalt(12));

            case 3:
              salt = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(bcrypt.hash(user.password, salt));

            case 6:
              user.password = _context2.sent;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
}); // Instance methods

User.prototype.comparePassword = function _callee(candidatePassword) {
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", bcrypt.compare(candidatePassword, this.password));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, null, this);
};

User.prototype.getFullName = function () {
  return "".concat(this.first_name, " ").concat(this.last_name);
};

User.prototype.toJSON = function () {
  var values = _objectSpread({}, this.get());

  delete values.password;
  return values;
};

module.exports = User;