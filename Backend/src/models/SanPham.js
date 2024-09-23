"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SanPham.belongsTo(models.LoaiSanPham, { foreignKey: "MaLoaiSanPham" });
      SanPham.belongsTo(models.GiamGia, { foreignKey: "MaGiamGia" });
      SanPham.hasMany(models.ChiTietHoaDon, { foreignKey: "MaSanPham" });
      SanPham.hasMany(models.DanhGia, { foreignKey: "MaSanPham" });
    }
  }
  SanPham.init(
    {
      TenSanPham: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gia: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      MoTa: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      SoLuongTon: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MaLoaiSanPham: {
        type: DataTypes.INTEGER,
        references: {
          model: "LoaiSanPham",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      MaGiamGia: {
        type: DataTypes.INTEGER,
        references: {
          model: "GiamGia",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      LinkAnh: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SanPham",
      freezeTableName: true,
    }
  );

  return SanPham;
};
