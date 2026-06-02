const ApiError = require("../utils/apiError");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const CheckAdmin = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new ApiError(404, "Token not found in cookies");
    }
    const user = jwt.verify(token, process.env.PRIVATE_KEY);

    if (user.role == "admin") {
      req.user = user;
      next();
    }
  } catch (error) {
    console.log("🚀 ~ CheckAdmin ~ error:", error);
    next(error);
  }
};

module.exports = CheckAdmin;
