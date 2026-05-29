const { signupServices, loginServices } = require("../services/user.server");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const {
  signupValidation,
  loginValidation,
} = require("../validations/user.validation");

const signupController = asyncHandler(async (req, res) => {
  signupValidation.parse(req.body);

  const result = await signupServices(req.body);

  apiResponse(res, 200, true, "User created successfully", result);
});

const loginController = asyncHandler(async (req, res) => {
  loginValidation.parse(req.body);

  const { token, user } = await loginServices(req.body);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  apiResponse(res, 200, true, "Login Successfully", user);
});

module.exports = { signupController, loginController };
