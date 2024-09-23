"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DanhGia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NoiDung: {
        type: Sequelize.TEXT,
      },
      DiemDanhGia: {
        type: Sequelize.INTEGER,
      },
      MaKhachHang: {
        type: Sequelize.INTEGER,
        references: {
          model: "KhachHangs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
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
    await queryInterface.dropTable("DanhGia");
  },
};
