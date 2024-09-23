"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NhanVien.hasMany(models.DonHang, { foreignKey: "MaNhanVien" });
    }
  }
  NhanVien.init(
    {
      HoTen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SoDienThoai: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DiaChi: {
        type: DataTypes.STRING,
      },
      ChucVu: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "NhanVien",
      freezeTableName: true,
    }
  );
  return NhanVien;
};
