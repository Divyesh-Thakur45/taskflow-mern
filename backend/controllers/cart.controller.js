const cartModel = require("../models/cart.model");
const ApiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const allCartController = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const getcarts = await cartModel.find({ userId: _id }).populate("productId");
  apiResponse(res, 200, true, "get carts successfully", getcarts);
});

const createCartController = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  if (!_id) {
    throw new ApiError(404, "Please login first id not found");
  }
  const { productId } = req.body;
  const addtocart = await cartModel.create({
    userId: _id,
    productId,
  });
  apiResponse(res, 201, true, "cart create successfully", addtocart);
});

module.exports = { allCartController, createCartController };
