const express = require("express");
const {
  signupController,
  loginController,
  meController,
  logoutController,
} = require("../controllers/user.controller");
const verifyToken = require("../middlewares/token.middleware");

const authRoute = express.Router();

authRoute.post("/signup", signupController);

authRoute.post("/login", loginController);

authRoute.get("/me", verifyToken, meController);

authRoute.post("/logout", logoutController);

module.exports = authRoute;
