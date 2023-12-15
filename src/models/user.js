// Definisikan model untuk tabel 'users'
const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// await sequelize.async(); // Sinkronkan model dengan tabel di database
module.exports = User;
