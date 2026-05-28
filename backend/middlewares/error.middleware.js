const errorMiddleware = (err, req, res, next) => {
  res.status(statusCode).json({
    success: false,
    message: err.message | "internal server error",
  });
};

module.exports = errorMiddleware;
