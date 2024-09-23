"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DanhGia.belongsTo(models.KhachHang, { foreignKey: "MaKhachHang" });
      DanhGia.belongsTo(models.SanPham, { foreignKey: "MaSanPham" });
    }
  }
  DanhGia.init(
    {
      NoiDung: {
        type: DataTypes.TEXT,
      },
      DiemDanhGia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MaKhachHang: {
        type: DataTypes.INTEGER,
        references: {
          model: "KhachHang",
          key: "id",
        },
      },
      MaSanPham: {
        type: DataTypes.INTEGER,
        references: {
          model: "SanPham",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DanhGia",
      freezeTableName: true,
    }
  );
  return DanhGia;
};
