// const mysql = require("mysql2");

// const db_pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "culturama",
// });

// module.exports = db_pool.promise();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("culturama", "root", "", {
  host: "localhost",
  dialect: "mysql", // Sesuaikan dengan jenis database yang digunakan
});

module.exports = sequelize;
