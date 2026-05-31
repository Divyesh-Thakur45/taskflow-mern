const express = require("express");
const authRoute = require("./routes/user.route");
const errorMiddleware = require("./middlewares/error.middleware");
var cookieParser = require("cookie-parser");
const { productRoutes } = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
var cors = require("cors");
const adminRouter = require("./routes/admin.route");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

app.use("/auth", authRoute);

app.use("/products", productRoutes);

app.use("/cart", cartRoutes);

app.use("/admin", adminRouter);

app.use(errorMiddleware);

module.exports = app;
