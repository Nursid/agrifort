// models/index.js

const dbConfig = require("../config/db");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("connected ...."))
  .catch((error) => console.log("Error: " + error));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ✅ Initialize model properly
db.Farmer = require("./Farmer")(sequelize, DataTypes);
db.Admin = require("./Admin")(sequelize, DataTypes);
db.Category = require("./Category")(sequelize, DataTypes);
db.Product = require("./Product")(sequelize, DataTypes);
db.Dealer = require("./Dealer")(sequelize, DataTypes);
db.CategoryModel = require("./Category")(sequelize, DataTypes);

db.Category.hasMany(db.Product, {
  foreignKey: "category", // Product.category references Category.id
  as: "products",
});

db.Product.belongsTo(db.Category, {
  foreignKey: "category",
  as: "categoryDetails",
});
  

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done!");
});

module.exports = db;
