const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(routes);

module.exports = app;
