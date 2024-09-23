"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("giamgias", [
      {
        TenGiamGia: "Giam 10%",
        PhanTramGiam: 10,
        NgayBatDau: new Date(),
        NgayKetThuc: new Date(new Date().setDate(new Date().getDate() + 30)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TenGiamGia: "Giam 20%",
        PhanTramGiam: 20,
        NgayBatDau: new Date(),
        NgayKetThuc: new Date(new Date().setDate(new Date().getDate() + 30)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("giamgia", null, {});
  },
};
