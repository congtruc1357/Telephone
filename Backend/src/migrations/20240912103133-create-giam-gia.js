"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("GiamGias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TenGiamGia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PhanTramGiam: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      NgayBatDau: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      NgayKetThuc: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("GiamGias");
  },
};
