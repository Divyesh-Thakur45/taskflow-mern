const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("🚀 ~ server.js:6 ~ startServer ~ error:", error.message);
  }
};
startServer();
