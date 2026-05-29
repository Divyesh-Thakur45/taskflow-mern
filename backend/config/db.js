require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Mongodb already connected ");
      return;
    }
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`mongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("🚀 ~ connectDB ~ error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
