const express = require("express");
const router = express.Router();

const db = require("../models");

console.log("Check db: ", db.KhachHang);

// Quản lý sản phẩm
router.get("/", async (req, res) => {
  try {
    const products = await db.SanPham.findAll();
    console.log("Check product: ", products);
    res.render("home", { products });
  } catch (e) {
    console.log("Lỗi: ", e);
    res.status(500).send("Lỗi không lấy được danh sách sản phẩm");
  }
});

// Thêm sản phẩm
router.get("/add-product", (req, res) => {
  res.render("add-product");
});

router.post("/add-product", async (req, res) => {
  const { TenSanPham, Gia, MoTa, SoLuongTon, MaLoaiSanPham, MaGiamGia } =
    req.body;
  try {
    await db.SanPham.create({
      TenSanPham,
      Gia: parseFloat(Gia),
      MoTa,
      SoLuongTon: parseInt(SoLuongTon),
      MaLoaiSanPham: parseInt(MaLoaiSanPham),
      MaGiamGia: parseInt(MaGiamGia),
    });

    res.redirect("/");
  } catch (e) {
    console.log("Lỗi thêm sản phẩm: ", e);
    res.status(500).send("Có lỗi khi thêm sản phẩm");
  }

  // Sửa sản phẩm
  router.get("/edit-product/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await db.SanPham.findByPk(productId);
      res.render("edit-product", { product });
    } catch (e) {
      console.log("Lỗi lấy sản phẩm: ", e);
      res.status(500).send("Lỗi lấy sản phẩm để sửa");
    }
  });

  router.post("/edit-product/:id", async (req, res) => {
    const productId = req.params.id;
    const { TenSanPham, Gia, MoTa, SoLuongTon, MaLoaiSanPham } = req.body;

    try {
      await db.SanPham.update(
        {
          TenSanPham,
          Gia: parseFloat(Gia),
          MoTa,
          SoLuongTon: parseInt(SoLuongTon),
          MaLoaiSanPham: parseInt(MaLoaiSanPham),
        },
        {
          where: { id: productId },
        }
      );

      res.redirect("/");
    } catch (e) {
      console.log("Lỗi update: ", e);
      res.status(500).send("Lỗi khi cập nhật sản phẩm");
    }
  });

  // Xóa sản phẩm
  router.get("/delete-product/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await db.SanPham.findByPk(productId);
      res.render("delete-product", { product });
    } catch (e) {
      console.log("Lỗi lấy sản phẩm xóa: ", e);
      res.status(500).send("Lỗi khi lấy sản phẩm xóa");
    }
  });

  router.post("/delete-product/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      await db.SanPham.destroy({ where: { id: productId } });
      res.redirect("/");
    } catch (e) {
      console.log("Lỗi xóa sản phẩm: ", e);
      res.status(500).send("Lỗi khi xóa sản phẩm");
    }
  });
});

module.exports = router;
