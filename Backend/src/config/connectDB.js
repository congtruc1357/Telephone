const { Sequelize } = require("sequelize");

// Thiết lập kết nối Sequelize với MySQL
const sequelize = new Sequelize("Telephone", "root", "123456", {
  host: "localhost", // Hoặc địa chỉ máy chủ cơ sở dữ liệu
  dialect: "mysql", // Loại cơ sở dữ liệu là MySQL
  define: {
    timestamps: false,
  },
});

// Kiểm tra kết nối
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối cơ sở dữ liệu thành công.");
  } catch (e) {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", e);
  }
};

/*sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối cơ sở dữ liệu thành công.");
  })
  .catch((err) => {
    console.error("Không thể kết nối đến cơ sở dữ liệu:", err);
  });*/

module.exports = connectDB;
