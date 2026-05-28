const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/user.controller");

const authRoute = express.Router();

authRoute.post("/signup", signupController);

authRoute.post("/login", loginController);

module.exports = authRoute;
