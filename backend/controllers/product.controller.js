const { allProductServices } = require("../services/product.services");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const allProductController = asyncHandler(async (req, res) => {
  const result = await allProductServices(req.query);
  apiResponse(res, 200, true, "Products get successfully", result);
});

module.exports = { allProductController };
