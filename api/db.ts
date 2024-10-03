// api/db.js
const { createServer } = require("json-server");
const server = createServer();
const router = require("json-server").router("db.json");
const middlewares = require("json-server").defaults();

server.use(middlewares);
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});
