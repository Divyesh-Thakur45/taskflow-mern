const express = require("express");
const CheckAdmin = require("../middlewares/checkadmin.middleware");
const upload = require("../middlewares/multer.middleware");
const {
  CreateProductController,
  getAllUsersController,
} = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.post(
  "/createproduct",
  CheckAdmin,
  upload.single("image"),
  CreateProductController,
);

adminRouter.get("/allusers", CheckAdmin, getAllUsersController);

module.exports = adminRouter;
