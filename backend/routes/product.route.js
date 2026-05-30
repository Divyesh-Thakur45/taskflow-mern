const express = require("express");
const { allProductController } = require("../controllers/product.controller");

const productRoutes = express.Router();

productRoutes.get("/all", allProductController);
module.exports = { productRoutes };
