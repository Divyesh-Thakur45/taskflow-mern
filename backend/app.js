const express = require("express");
const authRoute = require("./routes/user.route");
const errorMiddleware = require("./middlewares/error.middleware");
var cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);

app.use(errorMiddleware);

module.exports = app;
