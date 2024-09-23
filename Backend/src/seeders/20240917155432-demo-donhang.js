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
    return queryInterface.bulkInsert("donhangs", [
      {
        NgayLap: new Date(),
        MaKhachHang: 1,
        MaNhanVien: 1,
        TongTien: 25500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NgayLap: new Date(),
        MaKhachHang: 2,
        MaNhanVien: 2,
        TongTien: 500000,
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
    return queryInterface.bulkDelete("donhangs", null, {});
  },
};
