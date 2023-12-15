const Hapi = require("@hapi/hapi");
const users_routes = require("./routes/users.js");
const myMiddleware = require("./middleware/logs.js");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
  server.ext("onRequest", myMiddleware);
  server.route(users_routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
