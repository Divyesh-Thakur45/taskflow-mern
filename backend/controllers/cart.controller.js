const cartModel = require("../models/cart.model");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const allCartController = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const getcarts = await cartModel.find({ userId: _id });
  apiResponse(res, 200, true, "get carts successfully");
});

const createCartController = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { quantity, productId } = req.body;
  const addtocart = await cartModel.create({
    userId: _id,
    quantity,
    productId,
  });
  apiResponse(res, 201, true, "cart create successfully");
});

module.exports = { allCartController, createCartController };
