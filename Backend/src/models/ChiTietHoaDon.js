"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChiTietHoaDon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChiTietHoaDon.belongsTo(models.DonHang, { foreignKey: "MaDonHang" });
      ChiTietHoaDon.belongsTo(models.SanPham, { foreignKey: "MaSanPham" });
    }
  }
  ChiTietHoaDon.init(
    {
      SoLuong: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      GiaBan: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      MaSanPham: {
        type: DataTypes.INTEGER,
        references: {
          model: "SanPham",
          key: "id",
        },
      },
      MaDonHang: {
        type: DataTypes.INTEGER,
        references: {
          model: "DonHang",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ChiTietHoaDon",
      freezeTableName: true,
    }
  );
  return ChiTietHoaDon;
};
