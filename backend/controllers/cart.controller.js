const cartModel = require("../models/cart.model");
const ApiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const path = require("path");
const fs = require("fs");

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

const removeCartController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) throw new ApiError(401, "Product already remove");
  const product = await cartModel.findById(id).populate("productId");

  const imagePath = path.join(
    __dirname,
    "..",
    "uploads",
    product?.productId?.image,
  );

  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  const deletedProduct = await cartModel.findByIdAndDelete(product?._id);

  apiResponse(
    res,
    200,
    true,
    "Product Delete from cart successfully",
    deletedProduct,
  );
});

module.exports = {
  allCartController,
  createCartController,
  removeCartController,
};
