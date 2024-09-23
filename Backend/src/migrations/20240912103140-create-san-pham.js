"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SanPhams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TenSanPham: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Gia: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      MoTa: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      SoLuongTon: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      MaLoaiSanPham: {
        type: Sequelize.INTEGER,
        references: {
          model: "LoaiSanPhams",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      MaGiamGia: {
        type: Sequelize.INTEGER,
        references: {
          model: "GiamGias",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      LinkAnh: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable("SanPhams");
  },
};
