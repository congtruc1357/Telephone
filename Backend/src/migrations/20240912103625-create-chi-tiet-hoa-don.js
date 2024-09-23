"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ChiTietHoaDons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      SoLuong: {
        type: Sequelize.INTEGER,
      },
      GiaBan: {
        type: Sequelize.DECIMAL,
      },
      MaSanPham: {
        type: Sequelize.INTEGER,
        references: {
          model: "SanPhams",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      MaDonHang: {
        type: Sequelize.INTEGER,
        references: {
          model: "DonHangs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ChiTietHoaDons");
  },
};
