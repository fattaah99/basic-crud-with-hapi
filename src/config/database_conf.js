// module.exports = db_pool.promise();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "mysql", // Sesuaikan dengan jenis database yang digunakan
});

module.exports = sequelize;
