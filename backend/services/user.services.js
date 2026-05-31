const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const ApiError = require("../utils/apiError");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const signupServices = async ({ name, email, password }) => {
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    throw new ApiError(409, "Email is already exist");
  }
  const hashPassword = await bcrypt.hash(password, 8);
  const result = await userModel.create({
    name,
    email,
    password: hashPassword,
  });
  return result;
};

const loginServices = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new ApiError(404, "Email not found!");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new ApiError(401, "Incorrect Password");
  }

  const { password: hashedPassword, ...safeUser } = user.toObject();

  var token = jwt.sign(safeUser, process.env.PRIVATE_KEY);

  return {
    token,
    user,
  };
};
module.exports = { signupServices, loginServices };
