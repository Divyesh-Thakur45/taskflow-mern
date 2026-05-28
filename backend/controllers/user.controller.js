const signupServices = require("../services/user.server");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const userValidation = require("../validations/user.validation");

const signupController = asyncHandler(async (req, res) => {
  userValidation.parse(req.body);
  const { result } = await signupServices(req.body);
  if (!result) {
    throw new apiError(409, result.message);
  }
  apiResponse(res, 200, true, "User created successfully", result);
});

const loginController = async (req, res) => {
  try {
  } catch (error) {
    console.log("🚀~loginController ~ error:", error);
  }
};

module.exports = { signupController, loginController };
