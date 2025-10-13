const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Category = sequelize.define(
    "category",
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
    },
    {
      timestamps: true,
      tableName: "categories",
    }
  );
  return Category;
};
