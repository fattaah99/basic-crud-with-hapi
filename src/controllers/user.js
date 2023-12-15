const User = require("./../models/user");

const getAllUsers = async (request, h) => {
  try {
    const users = await User.findAll();
    const response = h.response({
      status: "success",
      message: "Successfully added the user",
      data: users,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get users",
    });
    response.code(500);
    return response;
  }
};

const getUserById = async (request, h) => {
  const userId = request.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return h.response("User not found").code(404);
    }

    const response = h.response({
      status: "success",
      message: "Successfully get the user",
      data: user,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get users",
    });
    response.code(500);
    return response;
  }
};

const addUser = async (request, h) => {
  try {
    // Data yang akan ditambahkan
    const dataToAdd = {
      nama: request.payload.nama,
      email: request.payload.email,
      password: request.payload.password,
    };

    // Tambahkan data ke database menggunakan Sequelize
    const user = await User.create(dataToAdd);

    return { status: "success", message: "Data added successfully", data: user.toJSON() };
  } catch (error) {
    console.error("Error adding data:", error);
    return h.response({ status: "error", message: "Failed to add data" }).code(500);
  }
};
module.exports = { getAllUsers, getUserById };
