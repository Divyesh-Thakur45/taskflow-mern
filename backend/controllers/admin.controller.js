const productModel = require("../models/product.model");
const userModel = require("../models/user.model");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

const CreateProductController = asyncHandler(async (req, res) => {
  const { title, category, brand, price, rating, stock } = req.body;

  if (!req.file) {
    throw new ApiError(400, "Product image is required");
  }

  const product = await productModel.create({
    image: req.file.filename,
    title,
    category,
    brand,
    price: Number(price),
    rating: Number(rating),
    stock: Number(stock),
  });

  apiResponse(res, 201, true, "Product created successfully", product);
});

const getAllUsersController = asyncHandler(async (req, res) => {
  if (req.user?.role != "admin") return;
  const users = await userModel
    .find({ role: "user" })
    .select("name email role");
  apiResponse(res, 200, true, "fetch all users successfully !", users);
});
module.exports = { CreateProductController, getAllUsersController };
