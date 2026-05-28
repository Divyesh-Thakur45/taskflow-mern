const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const signupServices = async ({ name, email, password }) => {
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    throw new Error("Email is already exist");
  }
  const hashPassword = await bcrypt.hash(password, 8);
  const result = await userModel.create({
    name,
    email,
    password: hashPassword,
  });
  return result;
};
module.exports = signupServices;
