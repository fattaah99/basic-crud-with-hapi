const { getAllUsers, getUserById } = require("../controllers/user");
const routes_users = [
  {
    method: "GET",
    path: "/users",
    handler: getAllUsers,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: getUserById,
  },
];

module.exports = routes_users;
