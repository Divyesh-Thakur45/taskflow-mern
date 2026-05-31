const express = require("express");
const {
  allCartController,
  createCartController,
} = require("../controllers/cart.controller");
const verifyToken = require("../middlewares/token.middleware");

const cartRoutes = express.Router();

cartRoutes.get("/all", verifyToken, allCartController);
cartRoutes.post("/add", verifyToken, createCartController);


module.exports = cartRoutes;
