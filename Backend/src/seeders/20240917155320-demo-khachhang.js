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
    return queryInterface.bulkInsert("khachhangs", [
      {
        HoTen: "Lê Văn C",
        SoDienThoai: "0987654321",
        Email: "A@gmail.com",
        DiaChi: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        HoTen: "Nguyễn Thị D",
        SoDienThoai: "0123456789",
        Email: "B@gmail.com",
        DiaChi: "TP HCM",
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
    return queryInterface.bulkDelete("khachhangs", null, {});
  },
};
