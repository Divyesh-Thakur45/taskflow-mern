const { signupServices, loginServices } = require("../services/user.services");
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
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  apiResponse(res, 200, true, "Login Successfully", user);
});

const meController = asyncHandler(async (req, res) => {
  const user = req.user;
  apiResponse(res, 200, true, "user authenticated successfully", user);
});

const logoutController = asyncHandler((req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  apiResponse(res, 200, true, "Logout successfully");
});

module.exports = {
  signupController,
  loginController,
  meController,
  logoutController,
};
