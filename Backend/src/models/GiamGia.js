"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GiamGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GiamGia.hasMany(models.SanPham, { foreignKey: "MaGiamGia" });
    }
  }
  GiamGia.init(
    {
      TenGiamGia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PhanTramGiam: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      NgayBatDau: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      NgayKetThuc: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "GiamGia",
      freezeTableName: true,
    }
  );
  return GiamGia;
};
