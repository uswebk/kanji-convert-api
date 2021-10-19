const express = require("express");
const apiRouter = require("./api/route");

const app = express();
app.use("/", apiRouter);

module.exports = app;
