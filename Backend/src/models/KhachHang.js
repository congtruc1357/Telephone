"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KhachHang.hasMany(models.DanhGia, { foreignKey: "MaKhachHang" });
      KhachHang.hasMany(models.DonHang, { foreignKey: "MaKhachHang" });
    }
  }
  KhachHang.init(
    {
      HoTen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SoDienThoai: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
      },
      DiaChi: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "KhachHang",
      freezeTableName: true,
    }
  );
  return KhachHang;
};
