const sequelize = require("./models/database");
const NhanVien = require("./models/nhanvien");
const KhachHang = require("./models/khachhang");
const LoaiSanPham = require("./models/loaisanpham");
const SanPham = require("./models/sanpham");
const GiamGia = require("./models/giamgia");
const DonHang = require("./models/donhang");
const ChiTietHoaDon = require("./models/chitiethoadon");
const DanhGia = require("./models/danhgia");

// Đồng bộ hóa các mô hình với cơ sở dữ liệu
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
