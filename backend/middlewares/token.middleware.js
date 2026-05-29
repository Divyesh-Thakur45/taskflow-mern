const ApiError = require("../utils/apiError");

require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new ApiError("Token not found in cookies");
    }
    const user = jwt.verify(token, process.env.PRIVATE_KEY);

    req.user = user;

    next();
  } catch (error) {
    console.log("🚀 ~ verifyToken ~ error:", error);
    next(error);
  }
};

module.exports = verifyToken;
