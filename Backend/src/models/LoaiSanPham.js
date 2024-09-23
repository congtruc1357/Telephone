"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoaiSanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LoaiSanPham.hasMany(models.SanPham, { foreignKey: "MaLoaiSanPham" });
    }
  }
  LoaiSanPham.init(
    {
      TenLoaiSanPham: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "LoaiSanPham",
      freezeTableName: true,
    }
  );

  return LoaiSanPham;
};
