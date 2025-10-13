const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      features: {
        type: DataTypes.JSON, // ✅ store array of strings
        allowNull: true,
      },
      crops: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      dosage: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      benefits: {
        type: DataTypes.JSON, // ✅ store array of strings
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "products",
    }
  );

  return Product;
};
