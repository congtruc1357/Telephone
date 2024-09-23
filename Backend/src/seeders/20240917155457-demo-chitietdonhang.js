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
    return queryInterface.bulkInsert("chitiethoadons", [
      {
        SoLuong: 1,
        GiaBan: 25000000,
        MaSanPham: 1,
        MaDonHang: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        SoLuong: 1,
        GiaBan: 500000,
        MaSanPham: 2,
        MaDonHang: 2,
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
    return queryInterface.bulkDelete("chitiethoadons", null, {});
  },
};
