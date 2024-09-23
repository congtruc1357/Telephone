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
    return queryInterface.bulkInsert("sanphams", [
      {
        TenSanPham: "iPhone 13",
        Gia: 25000000,
        MoTa: "Điện thoại Apple",
        SoLuongTon: 10,
        MaLoaiSanPham: 1,
        MaGiamGia: 1,
        LinkAnh:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftechhouse.myharavan.com%2Fproducts%2Fdien-thoai-iphone-11-64gb&psig=AOvVaw2ggNxpS0KA6uDByDS3fM7y&ust=1726915326777000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODh64ir0YgDFQAAAAAdAAAAABAE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TenSanPham: "Ốp lưng iPhone 13",
        Gia: 500000,
        MoTa: "Phụ kiện bảo vệ",
        SoLuongTon: 50,
        MaLoaiSanPham: 2,
        MaGiamGia: 2,
        LinkAnh:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdigit.com.ua%2Fshop%2Fproduct%2Fapple-iphone-11-64gb-product-red&psig=AOvVaw2ggNxpS0KA6uDByDS3fM7y&ust=1726915326777000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODh64ir0YgDFQAAAAAdAAAAABAI",
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
    return queryInterface.bulkDelete("sanphams", null, {});
  },
};
