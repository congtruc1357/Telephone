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
    return queryInterface.bulkInsert("danhgia", [
      {
        NoiDung: "Sản phẩm tốt, đáng tiền!",
        DiemDanhGia: 5,
        MaKhachHang: 1,
        MaSanPham: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NoiDung: "Ốp lưng chắc chắn.",
        DiemDanhGia: 4,
        MaKhachHang: 2,
        MaSanPham: 2,
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
    return queryInterface.bulkDelete("danhgia", null, {});
  },
};
