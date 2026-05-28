const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      index: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      require: true,
      index: true,
    },
    role: {
      type: String,
      require: true,
      enum: ["user" | "admin"],
      default: "user",
    },
  },
  {
    timestamp: true,
  },
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
