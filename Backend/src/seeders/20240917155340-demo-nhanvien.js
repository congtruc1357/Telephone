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

    return queryInterface.bulkInsert("nhanviens", [
      {
        HoTen: "Nguyễn Văn A",
        SoDienThoai: "1254786",
        DiaChi: "HN",
        ChucVu: "Quản lý",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        HoTen: "Trần Thị B",
        SoDienThoai: "54656949",
        DiaChi: "TPHCM",
        ChucVu: "Nhân viên",
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
    return queryInterface.bulkDelete("nhanviens", null, {});
  },
};
