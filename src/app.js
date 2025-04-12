const express = require("express");
const app = express();

const locaisRouter = require("./routes/locaisRouter");
const avaliacoesRouter = require("./routes/avaliacoesRouter");

app.use("/api", locaisRouter);
app.use("/api", avaliacoesRouter);

module.exports = app;
