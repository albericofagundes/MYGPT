const express = require("express");

const routes = express.Router();

routes.post("/api/prompt", (req, res) => {
  res.send("Hello World");
});

routes.get("", (req, res) => {
  res.send("Hello World");
});

module.exports = routes;
