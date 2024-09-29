const express = require("express");
const app = express();
const serverPort = 3015;

const homeRoutes = require("./routers/home");
const apiRoutes = require("./routers/api");
const helloRoutes = require("./routers/hello");
const fruitsRoutes = require("./routers/fruits");
const vegetablesRoutes = require("./routers/vegetables");

app.use("/", homeRoutes);

app.use("/api", apiRoutes);

app.use("/hello", helloRoutes);

app.use("/api/fruits", fruitsRoutes);

app.use("/api/legumes", vegetablesRoutes);

app.listen(serverPort, () => {
  console.info(`Listenning on port ${serverPort}`);
});
