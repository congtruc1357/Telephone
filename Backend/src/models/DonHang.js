"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DonHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DonHang.belongsTo(models.NhanVien, { foreignKey: "MaNhanVien" });
      DonHang.belongsTo(models.KhachHang, { foreignKey: "MaKhachHang" });
      //DonHang.belongsTo(models.GiamGia, { foreignKey: "MaGiamGia" });
      DonHang.hasMany(models.ChiTietHoaDon, { foreignKey: "MaDonHang" });
    }
  }
  DonHang.init(
    {
      NgayLap: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      MaKhachHang: {
        type: DataTypes.INTEGER,
        references: {
          model: "KhachHang",
          key: "id",
        },
      },
      MaNhanVien: {
        type: DataTypes.INTEGER,
        references: {
          model: "NhanVien",
          key: "id",
        },
      },
      TongTien: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: "DonHang",
      freezeTableName: true,
    }
  );
  return DonHang;
};
